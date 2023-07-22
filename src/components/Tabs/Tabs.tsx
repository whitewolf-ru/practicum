
import React, { FC } from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Tabs.module.css';

type Props = {
  className?: string;
  //activeTab: "buns" | "sauces" | "mains"
  activeTab: string;
}

const Tabs: FC<Props> = (props) => {
   const [tab, setTab] = React.useState('buns');
   React.useEffect(() => { document.getElementById(tab)!.scrollIntoView() }, [tab]);

   return (
      <div className={`${styles.tabs_container} text text_type_main-small`}>
         <Tab value="buns" key="buns" active={props.activeTab === 'buns'} onClick={setTab}>
            Булки
         </Tab>
         <Tab value="sauces" key="sauces" active={props.activeTab === 'sauces'} onClick={() => setTab("sauces")}>
            Соусы
         </Tab>
         <Tab value="mains" key="mains" active={props.activeTab === 'mains'} onClick={() => setTab("mains")}>
            Начинки
         </Tab>
      </div>
   )
}

export default Tabs;
