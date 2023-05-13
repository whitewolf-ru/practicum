
import styles from './OrderDetails.module.css';
import done from '../../images/done.jpg';
import PropTypes from 'prop-types';

function OrderDetails({orderId}) {
   return (
      <span>
         <p className={`${styles.digits} text text_type_digits-large`}>{orderId}</p>
         <p className={`${styles.text} text_type_main-medium`}>Идентификатор заказа</p>
         <img src={done} alt="done" className={styles.done}/>
         <p className={`${styles.text} text_type_main-default`}>Ваш заказ начали готовить</p>
         <p className={`${styles.text} text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
      </span>
   )
}

OrderDetails.propTypes = {
   orderId: PropTypes.number
};

export default OrderDetails;
