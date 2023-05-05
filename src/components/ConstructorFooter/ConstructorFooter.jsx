
import PropTypes from 'prop-types';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './ConstructorFooter.css';

function ConstructorFooter(props) {
console.warn(props);
   return (
      <p className="ConstructorFooter text text_type_digits-medium" onClick={props.onClick}>
         {props.amount} <CurrencyIcon type="primary"/>
         <Button htmlType="button" type="primary" size="small" style={{marginLeft: 10}}>
            Оформить заказ
         </Button>
      </p>
   )
}

ConstructorFooter.propTypes = {
  amount: PropTypes.number
};

export default ConstructorFooter;
