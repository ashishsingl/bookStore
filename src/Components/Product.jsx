import React, { useContext, useState } from "react";
import "./product.css";
import { ShoppingBasket, UpdateShoppingBasket } from "../App";

const Product = ({ id, img, name, price }) => {

  // getting basket and update basket from 'app' file
  let userBasket = useContext(ShoppingBasket);
  let updateUserBasket = useContext(UpdateShoppingBasket);


  //Function runs after use click add to Cart function
  const addToCart = (id, img, name, price) => {
    //Checking if the buying product is already inside the cart
    let getProd = false;
    let whatReturn ;

    if (userBasket.length !== 0) {
      userBasket.map((valueObj) => {
        //if product id matches any of the basket items id's then it means we already have that product
        if (valueObj.id === id) {
          getProd = true;
          valueObj.qty += 1;
          updateUserBasket([...userBasket])
        } else {
          // Once if id have matches then we should not change the value of 'getProd' in whole loop
          if (getProd !== true) getProd = false;
        }
      });
    }
    console.log("this is getProd value >>> ", getProd);
    // console.log('this is what map function returns ', whatReturn)

    // making an object and filling all details of product which user have to buy
    if (getProd === false) {
      const prodObj = {
        id: id,
        img: img,
        name: name,
        price: price,
        qty: 1,
      };

      //update basket value means adding buying product
      updateUserBasket([...userBasket, prodObj]);
    }
    console.log("this is cart>>>", userBasket);
  };

  return (
    <div className="product">
      <img className="prodImg" src={img} alt="product" />
      <p className="prod-title">{name}</p>
      <p className="price">Rs. {price}</p>
      <button
        className="buy"
        onClick={() => {
          addToCart(id, img, name, price);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
