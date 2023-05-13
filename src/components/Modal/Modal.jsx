
import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from './../ModalOverlay/ModalOverlay.jsx';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './Modal.css';

const KEY_ESC = 27;

const Modal = (props) => {

   const MODAL_ROOT = document.getElementById("react-modals");
   const onClose = props.onClose;

   const keyCheck = (e) => {
      if (e.keyCode === KEY_ESC) { onClose() }
   }

   React.useEffect(() => {
      const handleESCclose = (e) => { keyCheck(e) }
      document.addEventListener("keydown", handleESCclose);
      return () => document.removeEventListener("keydown", handleESCclose)                                                                                               
   }, [])

   // Давим клик внутри окна
   function clickSuppressor(e) {
      e.stopPropagation();
   }

   return ReactDOM.createPortal(    
      <>
         <ModalOverlay onClick={onClose}/>
         <div className="window-modal" onClick={clickSuppressor}>
            <p className="modal-header text text_type_main-medium">
               {props.header}
               <CloseIcon onClick={onClose} className="close-icon"/>
            </p>
            <div className="window-message text text_type_main-default">
               {props.children}
            </div>
         </div>
      </>
      ,
    MODAL_ROOT)

}

Modal.propTypes = {
   header: PropTypes.string,
   onClose: PropTypes.func
};

export default Modal;
