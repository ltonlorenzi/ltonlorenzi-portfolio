import Form from '@/components/common/form/Form';
import TextAreaField from '@/components/common/form/inputs/TextAreaField';
import TextField from '@/components/common/form/inputs/TextField';
import { addTechnology } from '@/queries/technologies';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const technologySchema = yup.object().shape({
  name: yup.string().required('name is required'),
  description: yup.string().required('description is required'),
});

interface FormValues {
  name: string;
  description: string;
}

interface TechnologiesForm {
  onClose: () => void;
}

const TechnologiesForm = ({ onClose }: TechnologiesForm) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormValues>({
    resolver: yupResolver(technologySchema),
  });

  //why should I use this useCallback? how does this work?
  const onSubmit = useCallback((formData: FormValues) => {
    // You can use the validated data to make your API request here
    try {
      const res = addTechnology(formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  }, []);

  return (
    <Form
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4"
    >
      <TextField errors={errors} id="name" label="Name" {...register('name')} />
      <TextAreaField
        errors={errors}
        id="description"
        label="Description"
        {...register('description')}
      />
    </Form>
  );
};

export default TechnologiesForm;
