import { Projects as ProjectsComponent } from '@/components/public/projects/Projects';
import { Locale } from '@/lib/types';
import { fetchProjects } from '@/queries/projects';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface ProjectsProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function Projects({ params }: ProjectsProps) {
  const { locale } = await params;
  //se llama a la query desde el servidor, se cachea en el state la data de queryClient transformandola con dehydrate
  //dentro de este boundary, los client components pueden usar esta data cacheada, sin llamar a la api de nuevo
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['projects', locale],
    queryFn: () => fetchProjects(locale),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProjectsComponent />
    </HydrationBoundary>
  );
}
