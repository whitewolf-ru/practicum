import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Tabs.module.css';

function Tabs(props) {
   const [current, setCurrent] = React.useState('buns');
   const [tab, setTab] = React.useState('buns');
   React.useEffect(() => { document.getElementById(tab).scrollIntoView() }, [tab]);

   return (
      <div className={styles.tabs_container}>
         <Tab value="buns" id="buns" active={props.activeTab === 'buns'} onClick={setTab} className="text text_type_main-small">
            Булки
         </Tab>
         <Tab value="sauces" id="sauces" active={props.activeTab === 'sauces'} onClick={() => setTab("sauces")} className="text text_type_main-small">
            Соусы
         </Tab>
         <Tab value="mains" id="mains" active={props.activeTab === 'mains'} onClick={() => setTab("mains")} className="text text_type_main-small">
            Начинки
         </Tab>
      </div>
   )
}

Tabs.propTypes = {
   activeTab: PropTypes.string
};

export default Tabs;
