import React from 'react';
import { FieldErrors } from 'react-hook-form';

interface TextAreaFieldProps {
  errors: FieldErrors;
  id: string;
  label: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  errors,
  id,
  label,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full border border-gray-300 rounded p-2"
        {...props}
      />
      {errors[id] && (
        <p className="text-red-500">{errors[id]?.message as string}</p>
      )}
    </div>
  );
};

export default TextAreaField;
