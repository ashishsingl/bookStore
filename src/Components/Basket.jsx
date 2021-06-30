import React, { useContext} from "react";
import "./basket.css";
import CartProd from "./CartProd";
import { ShoppingBasket } from "../App";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Basket = () => {
  //getting userBasket from 'app' file
  let userBasket = useContext(ShoppingBasket);

  // Initializing total price from '0'
  let totalPrice = 0;

  // getting total price
  if (userBasket.length !== 0) {
    userBasket.map((valueObj) => {
      return (totalPrice = totalPrice + valueObj.price*valueObj.qty)
    })
  }

  // Initializing total items from '0'
  let totalItem = 0; 

  // get total items in basket 
    if (userBasket.length !== 0 ){
      userBasket.map((valueObj)=>{
        return (totalItem = totalItem + valueObj.qty)
      })
  }
  
  return (
    <div className="basket">
      <div className="basket-container">
        <p className="cart-heading">Your shopping Cart</p>

        {/* Initially What to show in start */}
        {userBasket.length !== 0 ? (
          <>
            <p className="total-items">
              Cart Subtotal ( {totalItem} item):
              <strong>Rs. {totalPrice}</strong>
            </p>
          </>
        ) : (
          <>
            <p className="empty-cart">Nothing to show :( </p>
            <AddShoppingCartIcon className="basket-cart-icon" />
          </>
        )}

        <div className="cartProd-container">
          {userBasket.map((valueObj, index) => {
            return (
              //Calling buying product component into basket
              <CartProd
                key={index}
                id={valueObj.id}
                img={valueObj.img}
                name={valueObj.name}
                price={valueObj.price}
                qty={valueObj.qty}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Basket;
