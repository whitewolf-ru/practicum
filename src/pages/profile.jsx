
import React, { useState } from 'react';
import { NavLink, Outlet, Navigate } from 'react-router-dom'

import styles_global from "./../styles.module.css";
import styles from './profile.module.css';

export default function Profile() {

   return (
      <div className={`${styles_global.page_container} ${styles.page_container} text_type_main-medium`}>
         <div className={styles.tabs}>
            <NavLink
               to={{ pathname: `/profile/profile` }}
               className={({ isActive }) => isActive ? styles.activeLink : `${styles.profileButton} profileButton text_color_inactive` }>
               Профиль
            </NavLink>

            <NavLink
               to={{ pathname: `/profile/orders` }}
               className={({ isActive }) => isActive ? styles.activeLink : `${styles.profileButton} profileButton text_color_inactive` }>
               История заказов
            </NavLink>

            {/*<div className={`${styles.profileButton} profileButton text_color_inactive`}> История заказов </div>*/}

            <NavLink
               to={{ pathname: `/profile/logout` }}
               className={({ isActive }) => isActive ? styles.activeLink: `${styles.profileButton} profileButton text_color_inactive` }>
               Выход
            </NavLink>

            {/*<div className={`${styles.profileButton} profileButton text_color_inactive`}> Выход </div>*/}

            <div className={`${styles.tabs_label} profileButton text_type_main-small text_color_inactive`}> В этом разделе вы можете изменить свои персональные данные </div>
         </div>

         <div className={`${styles_global.inputs} text_type_main-small`}>
            <Outlet />
         </div>

         <div style={{ width: "40%" }}></div>

      </div>

   )
}
