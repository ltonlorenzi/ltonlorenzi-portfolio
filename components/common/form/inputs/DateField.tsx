import React from 'react';
import DatePicker from 'react-datepicker';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

interface DateFieldProps<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  id: Path<TFormValues>;
  label: string;
  errors: FieldErrors<TFormValues>;
  className?: string;
}

const DateField = <TFormValues extends FieldValues>({
  control,
  label,
  id,
  errors,
  className,
}: DateFieldProps<TFormValues>) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <Controller
        control={control}
        name={id}
        render={({ field }) => (
          <DatePicker
            className="w-full border border-gray-300 rounded p-2  text-foreground"
            {...field}
            selected={field.value}
          />
        )}
      />
      {errors[id] && (
        <p className="text-red-500">{errors[id]?.message as string}</p>
      )}
    </div>
  );
};

export default DateField;
