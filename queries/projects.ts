import { Locale } from '@/lib/types';
import { handleError } from '@/lib/utils';
import { Project } from '@/types/Project';
import axios from 'axios';

export const fetchProjects = async (locale: Locale) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/projects?locale=${locale}`
    );
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to get projects'));
  }
};

export const fetchAllProjects = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/projects`
    );
    const projects = res.data.map((p: Project) => ({
      ...p,
      start_date: new Date(p.start_date),
      end_date: new Date(p.end_date),
    }));
    return projects;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to get projects'));
  }
};

export const addProject = async (project: Project) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/projects`,
      project
    );
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to add project'));
  }
};

export const editProject = async (project: Project) => {
  try {
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/projects`,
      project
    );
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to edit project'));
  }
};

export const deleteProject = async (id: number) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/projects`,
      { data: { id } }
    );
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to delete project'));
  }
};
