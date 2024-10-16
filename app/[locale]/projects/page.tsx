import initTranslations from "@/app/i18n";

interface ProjectsProps {
  params: {
    locale: string;
  };
}

export default async function Projects({ params: { locale } }: ProjectsProps) {
  const { t } = await initTranslations(locale, ["projects"]);

  return <div>{t("title")}</div>;
}
