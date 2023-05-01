
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './AppHeader.css';

function AppHeader() {
   return (
      <div className="header-container text text_type_main-small">

         <p className="header-element" style={{ width: "calc(50% - 150px)", display: "flex", justifyContent: "left", alignItems: "center" }}>
            <li>
               <BurgerIcon type="primary"/>
            </li>
            <li>
               <a href="/" className="text text_type_main-small menulink text-color-default">Конструктор</a>
            </li>

            <li>
               <ListIcon/>
            </li>
            <li>
               <a href="/" className="menulink text text_color_inactive">Лента заказов</a>
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
               <a href="/" className="menulink text text_color_inactive">Личный кабинет</a>
            </li>
         </p>

      </div>
   )
}

export default AppHeader;
