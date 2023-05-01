
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import './ConstructorFooter.css';

function ConstructorFooter({amount}) {
   return (
      <p className="ConstructorFooter text text_type_digits-medium">
         {amount} <CurrencyIcon type="primary"/>
         <Button htmlType="button" type="primary" size="small" style={{marginLeft: 10}}>
            Оформить заказ
         </Button>
      </p>
   )
}

export default ConstructorFooter;
