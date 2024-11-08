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

  /*useCallback and use memo do the same. The difference is that:
    useCallback returns the function and useMemo returns the result of the function*/

  /*useCallback: memorize a function so that it is not recreated on every render
  If you don't memoize onSubmit, it will be re-created on every render of TechnologiesForm,
  potentially causing unnecessary re-renders of Form or other child components that rely on 
  the onSubmit function.
  */

  /*useMemo: memorize the result of a function if the parameters of it does not changes.
  only use the useMemo to memorize functions results when the function to call is slow and we 
  need to get better performance. 
  -we also use useMemo to get the same objects reference through different renders if the object
  does not change.
  */
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
