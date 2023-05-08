
import './WindowOrderFinal.css';
import done from '../../images/done.jpg';
import PropTypes from 'prop-types';

function WindowOrderFinal({order_id}) {
   return (
      <span>
         <p className="text text_type_digits-large digits">{order_id}</p>
         <p className="text text_type_main-medium">Идентификатор заказа</p>
         <img src={done} alt="done" className="done"/>
         <p className="text text_type_main-default">Ваш заказ начали готовить</p>
         <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </span>
   )
}

WindowOrderFinal.propTypes = {
   order_id: PropTypes.number
};

export default WindowOrderFinal;
