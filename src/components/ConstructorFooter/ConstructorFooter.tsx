
import React from "react";
//import PropTypes from 'prop-types';
import './ConstructorFooter.css';
import ButtonOrderProcess from '../ButtonOrderProcess/ButtonOrderProcess';
import TotalPrice from '../TotalPrice/TotalPrice';

//function ConstructorFooter(amount: number, onClick: React.MouseEventHandler<HTMLElement>) {
function ConstructorFooter(onClick: React.MouseEventHandler<HTMLElement>) {
   return (
      <p className="ConstructorFooter text text_type_digits-medium" onClick={onClick}>
         {/*<TotalPrice amount={amount}/>*/}
         <TotalPrice />
         <ButtonOrderProcess />
      </p>
   )
}

//ConstructorFooter.propTypes = {
//   amount: PropTypes.number
//};

export default ConstructorFooter;
