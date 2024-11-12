import React from 'react';
import { FieldErrors } from 'react-hook-form';

interface TextFieldProps {
  errors: FieldErrors;
  id: string;
  label: string;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  errors,
  id,
  label,
  type = 'text',
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full border border-gray-300 rounded p-2 text-foreground"
        {...props}
      />
      {errors[id] && (
        <p className="text-red-500">{errors[id]?.message as string}</p>
      )}
    </div>
  );
};

export default TextField;
