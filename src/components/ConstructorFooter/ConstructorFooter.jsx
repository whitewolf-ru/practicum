
import PropTypes from 'prop-types';
import './ConstructorFooter.css';
import ButtonOrderProcess from './../ButtonOrderProcess/ButtonOrderProcess.jsx';
import TotalPrice from './../TotalPrice/TotalPrice.jsx';

function ConstructorFooter(props) {
   return (
      <p className="ConstructorFooter text text_type_digits-medium" onClick={props.onClick}>
         <TotalPrice amount={props.amount}/>
         <ButtonOrderProcess/>
      </p>
   )
}

ConstructorFooter.propTypes = {
  amount: PropTypes.number
};

export default ConstructorFooter;
