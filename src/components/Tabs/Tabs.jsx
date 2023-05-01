import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function Tabs() {
   const [current, setCurrent] = React.useState('one')
   return (
     <div style={{ display: 'flex' }}>
       <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          <b className="text text_type_main-small">
             Булки
          </b>
       </Tab>
       <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          <b className="text text_type_main-small">
             Соусы
          </b>
       </Tab>
       <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          <b className="text text_type_main-small">
             Начинки
          </b>
       </Tab>
     </div>
   )
}

export default Tabs;
