import { Technology } from '@/types/Technology';

export const fetchTechnologies = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/technologies`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
};

export const addTechnology = async (technology: Technology) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/technologies`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(technology),
    }
  );
  if (!res.ok) {
    throw new Error('Failed to add the technology');
  }
  return res.json();
};
