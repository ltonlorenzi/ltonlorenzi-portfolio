import Modal from '@/components/common/Modal';
import React from 'react';

interface TranslationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TranslationsForm = ({ isOpen, onClose }: TranslationFormProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      TranslationsForm
    </Modal>
  );
};

export default TranslationsForm;
