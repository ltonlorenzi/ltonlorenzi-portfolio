import Projects from '@/app/components/Projects';
import initTranslations from '@/app/i18n';

interface ProjectsPageProps {
  params: {
    locale: string;
  };
}

export default async function ProjectsPage({
  params: { locale },
}: ProjectsPageProps) {
  const { t } = await initTranslations(locale, ['projects']);

  return (
    <div>
      <h1>{t('title')}</h1>
      <Projects locale={locale} />
    </div>
  );
}
