
import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from './../ModalOverlay/ModalOverlay.jsx';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './Modal.css';

const Modal = ( props ) => {

   const MODAL_ROOT = document.getElementById("react-modals");

   document.addEventListener("keydown", function fn(e) {
      if (e.keyCode === 27) {
         this.removeEventListener("keydown",fn);
         props.onClose();
      }
   })

   // Давим клик внутри окна
   function clickSuppressor(e) {
      e.stopPropagation();
   }

   return ReactDOM.createPortal(    
      <ModalOverlay onClick={props.onClose}>
         <div className="window-modal" onClick={clickSuppressor}>
            <p className="modal-header text text_type_main-medium">
               {props.header}
               <CloseIcon onClick={props.onClose} className="close-icon"/>
            </p>
            <div className="window-message text text_type_main-default">
               {props.children}
            </div>
          </div>
      </ModalOverlay>,
    MODAL_ROOT)

}

export default Modal;
