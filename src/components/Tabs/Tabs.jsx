import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Tabs.module.css';

function Tabs(props) {
   const [current, setCurrent] = React.useState('buns');

   return (
     <div className={styles.tabs_container}>
       <Tab value="buns" active={props.activeTab === 'buns'} className="text text_type_main-small" onClick={setCurrent}>
          Булки
       </Tab>
       <Tab value="sauces" active={props.activeTab === 'sauces'} className="text text_type_main-small" onClick={setCurrent}>
          Соусы
       </Tab>
       <Tab value="mains" active={props.activeTab === 'mains'} className="text text_type_main-small" onClick={setCurrent}>
          Начинки
       </Tab>
     </div>
   )
}

Tabs.propTypes = {
   activeTab: PropTypes.string
};

export default Tabs;
