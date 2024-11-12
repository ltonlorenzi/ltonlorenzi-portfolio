import React, { forwardRef, ReactNode } from 'react';

import Modal from './Modal';

interface ConfirmationModalProps {
  handleConfirm: () => void;
  handleCancel: () => void;
  isOpen: boolean;
  title: string;
  children: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
}

const ConfirmationModal = forwardRef<HTMLDivElement, ConfirmationModalProps>(
  (
    {
      handleConfirm,
      handleCancel,
      isOpen,
      title,
      children,
      confirmLabel = 'Delete',
      cancelLabel = 'Cancel',
    },
    ref
  ) => {
    return (
      <Modal isOpen={isOpen} onClose={handleCancel} ref={ref}>
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p>{children}</p>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            {cancelLabel}
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            {confirmLabel}
          </button>
        </div>
      </Modal>
    );
  }
);

ConfirmationModal.displayName = 'ConfirmationModal';

export default ConfirmationModal;
