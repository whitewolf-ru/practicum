
import { useState, useCallback } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const modalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    isModalOpen,
    modalOpen,
    modalClose,
  };
};

export default useModal;
