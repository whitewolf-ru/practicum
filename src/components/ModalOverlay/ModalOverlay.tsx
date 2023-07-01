
import React, { FC, PropsWithChildren } from "react";

import './ModalOverlay.css';
//import PropTypes from 'prop-types';

type TProps = PropsWithChildren<{
   onClick: () => void,
}>

const ModalOverlay: FC<TProps> = ({ onClick }) => {
   return (    
      <div className="window-overlay" onClick={onClick}></div>
    )
}

//ModalOverlay.propTypes = {
//   onClick: PropTypes.func
//};

export default ModalOverlay;
