import Form from '@/components/common/form/Form';
import TextAreaField from '@/components/common/form/inputs/TextAreaField';
import TextField from '@/components/common/form/inputs/TextField';
import { addTechnology, editTechnology } from '@/queries/technologies';
import { handleError } from '@/utils/handleError';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const technologySchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string(),
  imageUrl: yup.string(),
});

interface FormValues {
  name: string;
  description?: string;
  imageUrl?: string;
}

interface TechnologiesForm {
  onClose: () => void;
  technology?: FormValues;
}

const TechnologiesForm = ({ onClose, technology }: TechnologiesForm) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormValues>({
    resolver: yupResolver(technologySchema),
    defaultValues: technology,
  });

  const queryClient = useQueryClient();

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
  const onSubmit = async (formData: FormValues) => {
    const cleanedData = {
      ...formData,
      description: formData.description?.trim() || undefined,
      imageUrl: formData.imageUrl?.trim() || undefined,
    };
    try {
      const res = technology
        ? await editTechnology(cleanedData)
        : await addTechnology(cleanedData);
      await queryClient.invalidateQueries({
        queryKey: ['technologies'],
      });
      toast.success(res.message);
    } catch (error) {
      toast.error(handleError(error, 'Error adding technology'));
    } finally {
      onClose();
    }
  };

  return (
    <Form
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      submitButtonText={technology ? 'Edit' : 'Create'}
      className="grid gap-4 min-w-[420px]"
    >
      <h2 className="flex justify-center mb-4">Add Technology</h2>
      <TextField errors={errors} id="name" label="Name" {...register('name')} />
      <TextAreaField
        errors={errors}
        id="description"
        label="Description"
        {...register('description')}
      />
      <TextField
        errors={errors}
        id="imageUrl"
        label="Image URL"
        {...register('imageUrl')}
      />
    </Form>
  );
};

export default TechnologiesForm;
