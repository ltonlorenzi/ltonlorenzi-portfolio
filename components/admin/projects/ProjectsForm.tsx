// import { Button } from '@/components/common/Button';
import ErrorMessage from '@/components/common/ErrorMessage';
import Form from '@/components/common/form/Form';
import DateField from '@/components/common/form/inputs/DateField';
import SelectField from '@/components/common/form/inputs/SelectField';
import TextAreaField from '@/components/common/form/inputs/TextAreaField';
import TextField from '@/components/common/form/inputs/TextField';
import Spinner from '@/components/common/Spinner';
import { addProject, editProject } from '@/queries/projects';
import { fetchTechnologies } from '@/queries/technologies';
import { Locale } from '@/types/Locale';
import { Technology } from '@/types/Technology';
import { handleError } from '@/utils/handleError';
import { projectTypes } from '@/utils/projectTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import sanitizeProject from './sanitizeProject';

const projectFormSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup
    .date()
    .min(yup.ref('start_date'), "End date can't be before start date")
    .required(),
  technologies: yup
    .array()
    .of(
      yup
        .number()
        .typeError('Each item must be a number')
        .required('Number is required')
    )
    .required('Numbers array is required'),
  company: yup.string().required('Company is required'),
  imageUrl: yup.string().optional(),
  type: yup.string().required(),
  projectUrl: yup.string().optional(),
});

export interface ProjectFormValues {
  _id?: number;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  technologies: number[];
  translations?: {
    locale: Locale;
    fields: { title: string; description: string };
  }[];
  company: string;
  imageUrl?: string;
  type: string;
  projectUrl?: string;
}

interface ProjectsFormProps {
  onClose: () => void;
  project?: ProjectFormValues;
}

const ProjectsForm = ({ onClose, project }: ProjectsFormProps) => {
  const queryClient = useQueryClient();
  const {
    data: technologies,
    isLoading,
    status,
    error,
  } = useQuery({
    queryKey: ['technologies'],
    queryFn: () => fetchTechnologies(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<ProjectFormValues>({
    resolver: yupResolver(projectFormSchema),
    defaultValues: project,
  });

  const onSubmit = async (formData: ProjectFormValues) => {
    const sanitizedData = sanitizeProject(formData);
    try {
      const res = project
        ? await editProject(sanitizedData)
        : await addProject(sanitizedData);
      await queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success(res.message);
    } catch (error) {
      console.error(error);
      toast.error(handleError(error, 'Error adding technology'));
    } finally {
      onClose();
    }
  };

  // const handleAddTranslation = () => {};

  if (isLoading) return <Spinner />;
  if (status === 'error') return <ErrorMessage message={error?.message} />;
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      onClose={onClose}
      submitButtonText={project ? 'Edit' : 'Create'}
    >
      <h2 className="text-center mb-2">Add project</h2>
      <div className="grid grid-cols-6 gap-4 max-w-3xl">
        <TextField
          className="col-span-2"
          id="title"
          label="Title"
          errors={errors}
          type="text"
          {...register('title')}
        />
        <TextField
          className="col-span-2"
          id="company"
          label="Company"
          errors={errors}
          type="text"
          {...register('company')}
        />
        <TextField
          className="col-span-2"
          id="projectUrl"
          label="Project URL"
          errors={errors}
          type="text"
          {...register('projectUrl')}
        />
        <TextAreaField
          className="col-span-3"
          id="description"
          label="Description"
          errors={errors}
          {...register('description')}
        />
        <SelectField
          id="technologies"
          label="Technologies"
          className="col-span-3 min-h-32"
          errors={errors}
          control={control}
          options={technologies.map((tech: Technology) => ({
            value: tech._id,
            label: tech.name,
          }))}
          isMulti={true}
          {...register('technologies')}
        />

        <DateField
          className="col-span-2"
          label="Start date"
          id="start_date"
          control={control}
          errors={errors}
          {...register('start_date')}
        />
        <DateField
          className="col-span-2"
          label="End date"
          id="end_date"
          control={control}
          errors={errors}
          {...register('end_date')}
        />
        <SelectField
          className="col-span-2"
          id="type"
          control={control}
          errors={errors}
          options={projectTypes}
          label="Type"
          {...register('type')}
        />
        <TextField
          className="col-span-2"
          id="imageUrl"
          label="Image URL"
          errors={errors}
          type="text"
          {...register('imageUrl')}
        />
        {/* <Button onClick={handleAddTranslation}>Add translation</Button> */}
      </div>
    </Form>
  );
};

export default ProjectsForm;
