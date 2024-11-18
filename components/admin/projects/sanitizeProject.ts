import { Project } from '@/types/Project';

import { ProjectFormValues } from './ProjectsForm';

const sanitizeProject = (data: ProjectFormValues): Project => {
  const sanitizedObj = {
    ...data,
    projectUrl: data.projectUrl?.trim() || undefined,
    imageUrl: data.imageUrl?.trim() || undefined,
    start_date: new Date(data.start_date),
    end_date: new Date(data.end_date),
  };

  delete sanitizedObj.translations;
  return sanitizedObj;
};

export default sanitizeProject;
