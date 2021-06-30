import React, { useContext, useEffect, useState } from "react";
import "./cartProd.css";
import { ShoppingBasket, UpdateShoppingBasket } from "../App";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const CartProd = ({ id, img, name, price, qty }) => {
  // getting basket and update basket function from 'app' file
  let userBasket = useContext(ShoppingBasket);
  let updateUserBasket = useContext(UpdateShoppingBasket);


  //Function runs after deleting functions clicks and it delete item from the basket
  const deleteItem = (id) => {
    let modifyUserBasket = userBasket.filter((value) => {
      return value.id !== id;
    });
    updateUserBasket(modifyUserBasket);
  };

  const removeItem = (id)=>{

    //Searching object of this id into array 'userBasket'
    userBasket.map((valueObj)=>{
      if(valueObj.id === id){
        if(valueObj.qty > 0){
          valueObj.qty -= 1;
          updateUserBasket([...userBasket])  
        }
      }
    })
  }

  const addItem = (id) =>{
    
    //Searching object of this id into array 'userBasket'
    userBasket.map((valueObj)=>{
      if(valueObj.id === id){
        if(valueObj.qty < 10){
          valueObj.qty += 1;
          updateUserBasket([...userBasket])
        }
      }
    })
  }

  return (
    <div className="cart-prod">
      <div className="image-section">
        <img src={img} alt="Product Image" />
      </div>
      <div className="detail-section">
        <p className="cartProd-name">{name}</p>
        <p className="cartProd-price">Rs. {price}</p>
        <p className="cartProd-qty">
          Qty:
          <button className="remove-btn" onClick={()=>{removeItem(id)}}>
            <RemoveIcon className="remove" />
          </button>
            {qty}
          <button className="add-btn" onClick={()=>{addItem(id)}}>
            <AddIcon className="add" />
          </button>
        </p>
        <button
          className="cartProd-delete"
          onClick={() => {
            deleteItem(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartProd;
