
import React from 'react';
import './App.css';
import AppHeader from './../AppHeader/AppHeader.jsx';
import BurgerIngredients from './../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from './../BurgerConstructor/BurgerConstructor.jsx';
import ingredientsList from './../../utils/data.js';

function App() {
  return (
    <div className="App">
      <div className="header-section"></div>
      <div className="header-section"> <AppHeader/> </div>
      <div className="header-section"></div>
      <div className="container-title text text_type_main-medium"> Соберите бургер </div>
      <div></div>
      <div></div>
      <div></div>
      <div className="container">
         <BurgerIngredients ingredientsList={ingredientsList}/>
         <BurgerConstructor ingredientsList={ingredientsList}/>
      </div>
      <div></div>
    </div>
  );
}

export default App;
