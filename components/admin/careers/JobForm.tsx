import Form from '@/components/common/form/Form';
import DateField from '@/components/common/form/inputs/DateField';
import TextAreaField from '@/components/common/form/inputs/TextAreaField';
import TextField from '@/components/common/form/inputs/TextField';
import { handleError } from '@/lib/utils';
import { addJob, editJob } from '@/queries/jobs';
import { Job } from '@/types/Job';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const jobSchema = yup.object().shape({
  company: yup.string().required('Company is required'),
  title: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  body: yup.string().min(100).required(),
  imageUrl: yup.string().required(),
});

interface JobForm {
  onClose: () => void;
  job?: Job;
}

const JobForm = ({ onClose, job }: JobForm) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm<Job>({
    resolver: yupResolver(jobSchema),
    defaultValues: job,
  });

  const queryClient = useQueryClient();

  const onSubmit = async (formData: Job) => {
    try {
      const res = job ? await editJob(formData) : await addJob(formData);
      await queryClient.invalidateQueries({
        queryKey: ['jobs'],
      });
      toast.success(res.message);
    } catch (error) {
      toast.error(handleError(error, 'Error adding job'));
    } finally {
      onClose();
    }
  };

  return (
    <Form
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      submitButtonText={job ? 'Edit' : 'Create'}
      className="grid min-w-[420px]"
    >
      <h2 className="flex justify-center mb-4">Add Job</h2>
      <div className="grid  gap-4 grid-cols-2">
        <TextField
          errors={errors}
          id="title"
          label="Title"
          {...register('title')}
        />
        <TextField
          errors={errors}
          id="company"
          label="Company"
          {...register('company')}
        />
        <TextAreaField
          className="col-span-2"
          errors={errors}
          id="body"
          label="Body"
          {...register('body')}
        />

        <DateField
          label="Start date"
          id="start_date"
          control={control}
          errors={errors}
          {...register('start_date')}
        />
        <DateField
          label="End date"
          id="end_date"
          control={control}
          errors={errors}
          {...register('end_date')}
        />
        <TextField
          errors={errors}
          id="imageUrl"
          label="Image URL"
          {...register('imageUrl')}
        />
      </div>
    </Form>
  );
};

export default JobForm;
