
import { useState, useCallback } from "react";

const useModal = (handleClose) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
 
   const modalOpen = useCallback(() => {
   console.log("modalOpen()");
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
