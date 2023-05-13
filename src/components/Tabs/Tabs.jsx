import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Tabs.module.css';

function Tabs() {
   const [current, setCurrent] = React.useState('buns')
   return (
     <div className={styles.tabs_container}>
       <Tab value="buns" active={current === 'buns'} className="text text_type_main-small" onClick={setCurrent}>
          Булки
       </Tab>
       <Tab value="sauces" active={current === 'sauces'} className="text text_type_main-small" onClick={setCurrent}>
          Соусы
       </Tab>
       <Tab value="mains" active={current === 'mains'} className="text text_type_main-small" onClick={setCurrent}>
          Начинки
       </Tab>
     </div>
   )
}

export default Tabs;
