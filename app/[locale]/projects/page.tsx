import { Projects as ProjectsComponent } from '@/app/components/Projects';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface ProjectsProps {
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

export default async function Projects({ params: { locale } }: ProjectsProps) {
  //se llama a la query desde el servidor, se cachea en el state la data de queryClient transformandola con dehydrate
  //dentro de este boundary, los client components pueden usar esta data cacheada, sin llamar a la api de nuevo
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['projects', locale],
    queryFn: () => fetchProjects(locale),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <ProjectsComponent />
      </div>
    </HydrationBoundary>
  );
}
