import React, { useContext, useState } from "react";
import "./header.css";
import StoreIcon from "@material-ui/icons/Store";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { ShoppingBasket } from "../App";
import { NavLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import BooksApi from './BooksApi'

const Header = () => {
  //getting basket from 'app' file
  let userBasket = useContext(ShoppingBasket);

  //Initializing state hook for search bar 
  const [titleValue , updateTitleValue] = useState()

  // Initializing total price from '0'
  let totalItem = 0;

  if (userBasket.length !== 0) {
    userBasket.map((valueObj) => {
      return (totalItem = totalItem + valueObj.qty);
    });
  }

  // let filterResults;

  //getting Title which user searches 
  // const getTitle = (event) =>{
  //   event.preventDefault();
  //   filterResults = BooksApi.filter((valueObj)=>{
  //     return (valueObj.name === titleValue)
  //   })
  //     console.log('Filtered Results ', filterResults)

  // }
  

  // title tyaar kar rhe hai search krne ke liye uska function hai yeh
  // const insertTitle = (event)=>{
  //   let {value} = event.target;
  //   // console.log('this is value which user searchs', value)
  //   updateTitleValue(value);
  // }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <NavLink className="header-align" activeClassName="click-hover" to="/">
            <StoreIcon className="store-icon" />
          <p>
            <span className="header-top">Ashish's</span>
            <span className="header-bottom"> BookStore</span>
          </p>
          </NavLink>
        </div>
        {/* <div className="header-middle">
          <form onSubmit={getTitle}>
          <input type="text" placeholder="Search Your book" value={titleValue} onChange={insertTitle} /> 
          <button type="submit" className="search-btn" > <SearchIcon /> </button>
          </form>
        </div> */}
        <div className="header-right">
          <NavLink className="header-align"  activeClassName="click-hover" to="/basket">
            <AddShoppingCartIcon className="cart-icon" />
          <strong className="total-item">{totalItem}</strong>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
