import { Project } from '@/types/Project';

const sanitizeProject = (data: Project): Project => {
  const sanitizedObj = {
    ...data,
    projectUrl: data.projectUrl?.trim() || undefined,
    imageUrl: data.imageUrl?.trim() || undefined,
  };
  return sanitizedObj;
};

export default sanitizeProject;
