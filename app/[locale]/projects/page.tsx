import Projects from '@/app/components/Projects';
import initTranslations from '@/app/i18n';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface ProjectsPageProps {
  params: {
    locale: string;
  };
}

const fetchProjects = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects?locale=${locale}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
};

export default async function ProjectsPage({
  params: { locale },
}: ProjectsPageProps) {
  const { t } = await initTranslations(locale, ['projects']);

  //se llama a la query desde el servidor, se cachea en el state la data de queryClient transformandola con dehydrate
  //dentro de este boundary, los client components pueden usar esta data cacheada, sin llamar a la api de nuevo
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['projects', locale],
    queryFn: () => fetchProjects(locale),
  });

  return (
    <div className="p-12">
      <h1>{t('title')}</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Projects locale={locale} />
      </HydrationBoundary>
    </div>
  );
}
