import React, {useContext} from "react";
import CartProd from './CartProd'
import "./products.css";
import {ShoppingBasket} from '../App'

const CartProducts = () => {

    const userBasket = useContext(ShoppingBasket)

  return (
    <div className="products">
      {userBasket.length > 0 ? (
        userBasket.map((valueObj, index) => (
          <CartProd
            key={index}
            id={valueObj.id}
            img={valueObj.img}
            name={valueObj.name}
            price={valueObj.price}
            qty={valueObj.qty}
          />
        ))
      ) : (
        <h2> Basket is Empty </h2>
      )}
    </div>
  );
};

export default CartProducts;
