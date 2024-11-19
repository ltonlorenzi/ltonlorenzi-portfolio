'use client';
import Form from '@/components/common/form/Form';
import TextAreaField from '@/components/common/form/inputs/TextAreaField';
import TextField from '@/components/common/form/inputs/TextField';
import SocialIcons from '@/components/common/SocialIcons';
import { handleError } from '@/lib/utils';
import { sendEmail } from '@/queries/sendEmail';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

export interface ContactFormValues {
  name: string;
  subject: string;
  message: string;
  email: string;
}

const contactMeSchema = yup.object().shape({
  name: yup.string().required('name is required'),
  subject: yup.string().required('description is required'),
  message: yup.string().required('name is required'),
  email: yup.string().required('description is required'),
});

export default function Contact() {
  const handleContactMe = async (data: ContactFormValues) => {
    try {
      await sendEmail(data);
      toast.success('Email sent successfully. Thanks for contacting me!');
    } catch (error) {
      toast.error(handleError(error, 'Failed to send email'));
    }
  };

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ContactFormValues>({ resolver: yupResolver(contactMeSchema) });
  return (
    <div className="flex w-full text-dark-foreground md:flex-row flex-col gap-4 items-center justify-evenly">
      <div className="md:w-1/2 w-11/12">
        <h2 className="mb-4">Contact Me</h2>
        <Form
          onSubmit={handleSubmit(handleContactMe)}
          className="flex flex-col gap-4"
          showCancelBtn={false}
          submitButtonText="Send"
        >
          <TextField
            errors={errors}
            id="name"
            {...register('name')}
            label="Name"
          />
          <TextField
            errors={errors}
            id="email"
            type="email"
            {...register('email')}
            label="Email"
          />
          <TextField
            errors={errors}
            id="subject"
            {...register('subject')}
            label="Subject"
          />
          <TextAreaField
            errors={errors}
            id="message"
            {...register('message')}
            label="Message"
          />
        </Form>
      </div>
      <div>
        <SocialIcons />
      </div>
    </div>
  );
}
