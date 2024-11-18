import React from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import Select, { ActionMeta, MultiValue, SingleValue } from 'react-select';

interface SelectProps<TFormValues extends FieldValues> {
  errors: FieldErrors<TFormValues>;
  options: { value: string | number | undefined; label: string }[];
  id: Path<TFormValues>;
  label: string;
  control: Control<TFormValues>;
  isMulti?: boolean;
  className?: string;
}

const SelectField = <TFormValues extends FieldValues>({
  errors,
  options,
  id,
  label,
  control,
  isMulti = false,
  className,
}: SelectProps<TFormValues>) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <Controller
        name={id} // Dynamically use the id as the name for the field
        control={control}
        render={({ field }) => (
          <Select
            isMulti={isMulti}
            id={id}
            options={options}
            isClearable
            {...field} // Spread the field props from react-hook-form
            value={
              isMulti
                ? options.filter((option) =>
                    field.value?.includes(option.value)
                  ) // Filter selected options
                : options.find((option) => option.value === field.value) // Single select logic
            }
            onChange={(
              selectedOption:
                | MultiValue<{
                    value: string | number | undefined;
                    label: string;
                  }>
                | SingleValue<{
                    value: string | number | undefined;
                    label: string;
                  }>,
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              _actionMeta: ActionMeta<{
                value: string | number | undefined;
                label: string;
              }>
            ) => {
              const value = isMulti
                ? (
                    selectedOption as MultiValue<{
                      value: string | number | undefined;
                      label: string;
                    }>
                  ).map((option) => option.value) // Handle multi-select values as an array
                : (
                    selectedOption as SingleValue<{
                      value: string | number | undefined;
                      label: string;
                    }>
                  )?.value; // Handle single select value

              field.onChange(value); // Update react-hook-form with the new value
            }}
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
