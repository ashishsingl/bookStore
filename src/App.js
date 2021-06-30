import React, { createContext, useState } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Basket from "./Components/Basket";
import "./app.css";
import {Switch, Route} from 'react-router-dom'
import BasketPage from "./Components/BasketPage"
import BooksApi from './Components/BooksApi'

const ShoppingBasket = createContext();
const UpdateShoppingBasket = createContext();

const App = () => {
  const [userBasket, updateUserBasket] = useState([]);

  return (
    <div className="app">
      <ShoppingBasket.Provider value={userBasket}>
        <UpdateShoppingBasket.Provider value={updateUserBasket}>
          <Header />
          <Switch>
            <Route exact path="/" >
          <div className="showcase">
            <div className="showcase-left">
              <Products apiArray={BooksApi} className="showcase-left" />
            </div>
            <div className="showcase-right">
              <Basket className="showcase-right" />
            </div>
          </div>
          </Route>
          <Route exact path="/basket" component={BasketPage} />
          </Switch>
        </UpdateShoppingBasket.Provider>
      </ShoppingBasket.Provider>
    </div>
  );
};

export default App;
export { ShoppingBasket, UpdateShoppingBasket };

