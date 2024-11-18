import React, { forwardRef, ReactNode, useEffect } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  ref: React.Ref<HTMLDivElement>;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, children }, ref) => {
    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-foreground">
        <div className="bg-white p-6 rounded-2xl m-4 relative" ref={ref}>
          <button className="absolute top-2 right-2" onClick={onClose}>
            <IoCloseCircleSharp size={25} />
          </button>
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;
