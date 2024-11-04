export const fetchProjects = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects?locale=${locale}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
};
