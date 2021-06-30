import React from "react";
import Product from "./Product";
import "./products.css";
// import BooksApi from "./BooksApi";

const Products = ({apiArray}) => {
  return (
    <div className="products">

      {(apiArray.length > 0) ? apiArray.map((valueObj, index) => (
        <Product
          id={index + 1}
          img={valueObj.img}
          name={valueObj.name}
          price={valueObj.price}
        />
      )):<h2> Basket is Empty </h2>}
    </div>
  );
};

export default Products;
