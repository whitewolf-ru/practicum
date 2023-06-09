
import React from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'

import styles_global from "./../styles.module.css";
import styles from './profile.module.css';

export default function Profile() {

   const navigate = useNavigate();
   const { pathname } = useLocation();
   React.useEffect(() => {
      if (pathname === "/profile") navigate("/profile/profile", { replace: true });
   }, [])

   return (
      <div className={`${styles_global.page_container} ${styles.page_container} text_type_main-medium`}>
         <div className={styles.tabs}>
            <NavLink
               to={{ pathname: `/profile/profile` }}
               className={({ isActive }) => isActive ? styles.activeLink : `${styles.profileButton} profileButton text_color_inactive`}>
               Профиль
            </NavLink>

            <NavLink
               to={{ pathname: `/profile/orders` }}
               className={({ isActive }) => isActive ? styles.activeLink : `${styles.profileButton} profileButton text_color_inactive`}>
               История заказов
            </NavLink>

            <NavLink
               to={{ pathname: `/profile/logout` }}
               className={({ isActive }) => isActive ? styles.activeLink : `${styles.profileButton} profileButton text_color_inactive`}>
               Выход
            </NavLink>

            <div className={`${styles.tabs_label} profileButton text_type_main-small text_color_inactive`}> В этом разделе вы можете изменить свои персональные данные </div>
         </div>

         <div className={`${styles_global.inputs} text_type_main-small`}>
            <Outlet />
         </div>

         <div className={styles.empty}></div>

      </div>

   )
}
