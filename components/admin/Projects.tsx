'use client';
import { fetchProjects } from '@/queries/projects';
import { Project } from '@/types/Project';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const Projects = () => {
  const { data } = useQuery({
    queryKey: ['projects', 'en'],
    queryFn: () => fetchProjects('en'),
  });
  console.log(data);
  return (
    <div>
      <h2>Projects</h2>
      <table>
        {data.map((project: Project) => {
          return <div key={project._id}>{project.title}</div>;
        })}
      </table>
    </div>
  );
};
