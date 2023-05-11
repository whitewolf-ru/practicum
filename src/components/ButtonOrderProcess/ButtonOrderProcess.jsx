
import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { constructorContext } from '../../utils/constructorContext.js';

function ButtonOrderProcess() {
   const ingredients = React.useContext(constructorContext);	// Пусть будет так
   return (
      <Button htmlType="button" type="primary" size="small" style={{marginLeft: 10}}>
         Оформить заказ
      </Button>
   )
}

export default ButtonOrderProcess;
