import React, { ReactNode } from 'react';

interface FormProps {
  onClose?: () => void;
  onSubmit: () => void;
  children: ReactNode;
  className?: string;
  submitButtonText?: string;
  showCancelBtn?: boolean;
}

export default function Form({
  onClose,
  onSubmit,
  children,
  className,
  showCancelBtn = true,
  submitButtonText = 'Create',
}: FormProps) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
      <div className="flex justify-end space-x-2 mt-2">
        {showCancelBtn && (
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
}
