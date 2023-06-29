
import React, { FC, PropsWithChildren } from "react";
import ReactDOM from "react-dom";

import ModalOverlay from '../ModalOverlay/ModalOverlay';
//import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './Modal.css';

const KEY_ESC = 27;

type TProps = PropsWithChildren<{
   onClose: () => void,
   header?: string
}>

const Modal: FC<TProps> = ({ header, onClose, children }) => {

   const MODAL_ROOT = document.getElementById("react-modals");
   //const onClose = onClose;

   const keyCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === KEY_ESC) { onClose() }
   }

   React.useEffect(() => {
      const handleESCclose = (e: any) => { keyCheck(e) }
      document.addEventListener("keydown", handleESCclose);
      return () => document.removeEventListener("keydown", handleESCclose)
   }, [])

   // Давим клик внутри окна
   function clickSuppressor(e: any): void {
      e.stopPropagation();
   }

   return ReactDOM.createPortal(
      <>
         <ModalOverlay onClick={onClose} />
         <div className="window window-modal" onClick={clickSuppressor}>
            <p className="modal-header text text_type_main-medium">
               {header}
               <span className="close-icon">
                  <CloseIcon onClick={onClose} type={"primary"}/>
               </span>
            </p>
            <div className="window-message text text_type_main-default">
               {children}
            </div>
         </div>
      </>
      ,
      MODAL_ROOT!)

}

//Modal.propTypes = {
//   header: PropTypes.string,
//   onClose: PropTypes.func
//};

export default Modal;
