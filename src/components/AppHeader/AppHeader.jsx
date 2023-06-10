
import { Link, NavLink } from 'react-router-dom';

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles_global from "./../../styles.module.css";
import styles from './AppHeader.module.css';

function AppHeader() {
   return (
      <header className={styles_global.page_container}>

         <div className={`${styles.header_container} text text_type_main-small`}>

            <p className={`${styles.header_element} ${styles.left}`}>
               <li>
                  <BurgerIcon type="primary" />
               </li>

               <NavLink
                  to={{ pathname: `/` }}
                  className={({ isActive }) => isActive ? `${styles.link} ${styles.link_active}` : `${styles.link} text_color_inactive`}>
                  Конструктор
               </NavLink>

               <li>
                  <ListIcon />
               </li>

               <NavLink
                  to={{ pathname: `/list` }}
                  className={({ isActive }) => isActive ? `${styles.link} ${styles.link_active}` : `${styles.link} text_color_inactive`}>
                  Лента заказов
               </NavLink>

            </p>

            <li className={`${styles.header_element} ${styles.center}`}>
               <Link to={"/"}>
                  <Logo />
               </Link>
            </li>

            <p className={`${styles.header_element} ${styles.right}`}>
               <li>
                  <ProfileIcon className={styles.header_element} type="primary" />
               </li>
               <li className="menulink text text_color_inactive">
                  {/*<Link to={{ pathname: `/profile` }} className={`${styles.menulink} text text_color_inactive`}>*/}
                  <NavLink to={{ pathname: `/profile` }}
                     className={({ isActive }) => isActive ? `${styles.link} ${styles.link_active}` : `${styles.link} text_color_inactive`}>
                     Личный кабинет
                  </NavLink>
               </li>
            </p>
         </div>

      </header>
   )
}

export default AppHeader;
