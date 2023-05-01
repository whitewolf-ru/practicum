import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function Tabs() {
   const [current, setCurrent] = React.useState('buns')
   return (
     <div style={{ display: 'flex' }}>
       <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
          <b className="text text_type_main-small">
             Булки
          </b>
       </Tab>
       <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
          <b className="text text_type_main-small">
             Соусы
          </b>
       </Tab>
       <Tab value="mains" active={current === 'mains'} onClick={setCurrent}>
          <b className="text text_type_main-small">
             Начинки
          </b>
       </Tab>
     </div>
   )
}

export default Tabs;
