
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './AppHeader.css';

function AppHeader() {
   return (
      <div className="header-container text text_type_main-small">

         <p className="header-element" style={{ width: "calc(50% - 150px)", display: "flex", justifyContent: "left", alignItems: "center" }}>
            <li>
               <BurgerIcon type="primary"/>
            </li>
            <li className="menulink text text_type_main-small">
               Конструктор
            </li>

            <li>
               <ListIcon/>
            </li>
            <li className="menulink text text_color_inactive">
               Лента заказов
            </li>
         </p>

         <li className="header-element">
            <Logo/>
         </li>

         <p className="header-element" style={{ width: "calc(50% - 150px)", display: "flex", justifyContent: "right", alignItems: "center" }}>
            <li>
               <ProfileIcon className="header-element" type="primary" />
            </li>
            <li className="menulink text text_color_inactive">
               Личный кабинет
            </li>
         </p>

      </div>
   )
}

export default AppHeader;
