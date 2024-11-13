import React from 'react';
import { FiAlertCircle } from 'react-icons/fi'; // You can use any icon you prefer

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Something went wrong. Please try again later.',
  onRetry,
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center h-full">
      <FiAlertCircle className="text-red-500 text-6xl mb-4" />
      <p className="text-center text-xl font-semibold text-white mb-6">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
