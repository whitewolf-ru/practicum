
import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorContext } from '../../utils/constructorContext.js';

function ButtonOrderProcess() {
   return (
      <Button htmlType="button" type="primary" size="small">
         Оформить заказ
      </Button>
   )
}

export default ButtonOrderProcess;
