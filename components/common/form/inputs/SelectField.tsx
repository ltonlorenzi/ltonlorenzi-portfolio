import React from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import Select from 'react-select';

interface SelectProps<TFormValues extends FieldValues> {
  errors: FieldErrors<TFormValues>;
  options: { value: string | undefined; label: string }[];
  id: Path<TFormValues>;
  label: string;
  control: Control<TFormValues>;
}

const SelectField = <TFormValues extends FieldValues>({
  errors,
  options,
  id,
  label,
  control,
}: SelectProps<TFormValues>) => {
  return (
    <div>
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <Controller
        name={id} // Dynamically use the id as the name for the field
        control={control}
        render={({ field }) => (
          <Select
            id={id}
            options={options}
            isClearable
            {...field} // Spread the field props from react-hook-form
            onChange={(selectedOption) => {
              // When an option is selected, update the form with only the 'value'
              field.onChange(selectedOption ? selectedOption.value : null);
            }}
            value={options.find((option) => option.value === field.value)} // Set the selected option based on form value
          />
        )}
      />
      {errors[id] && (
        <p className="text-red-500">{errors[id]?.message as string}</p>
      )}
    </div>
  );
};

export default SelectField;
