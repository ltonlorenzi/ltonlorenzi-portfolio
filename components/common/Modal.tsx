import React, { ReactNode, useEffect } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';

interface Modal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Modal) {
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
      <div className="bg-white p-6 rounded w-full max-w-md relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <IoCloseCircleSharp size={25} />
        </button>
        {children}
      </div>
    </div>
  );
}
