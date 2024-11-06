export const fetchTechnologies = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/technologies`);
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
};
