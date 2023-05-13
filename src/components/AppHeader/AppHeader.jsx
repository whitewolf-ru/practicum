
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './AppHeader.module.css';

function AppHeader() {
   return (
      <header className={`${styles.header_container} text text_type_main-small`}>

         <p className={`${styles.header_element} ${styles.left}`}>
            <li>
               <BurgerIcon type="primary"/>
            </li>
            <li>
               <a href="/" className={`${styles.menulink} text text_type_main-small ${styles.text_color_default}`}>Конструктор</a>
            </li>

            <li>
               <ListIcon/>
            </li>
            <li>
               <a href="/" className={`${styles.menulink} text text_color_inactive`}>Лента заказов</a>
            </li>
         </p>

         <li className={`${styles.header_element} ${styles.center}`}>
            <Logo/>
         </li>

         <p className={`${styles.header_element} ${styles.right}`}>
            <li>
               <ProfileIcon className={styles.header_element} type="primary" />
            </li>
            <li className="menulink text text_color_inactive">
               <a href="/" className={`${styles.menulink} text text_color_inactive`}>Личный кабинет</a>
            </li>
         </p>

      </header>
   )
}

export default AppHeader;
