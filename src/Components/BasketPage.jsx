import React from 'react'
import Basket from './Basket'
import CartProducts from './CartProducts'

const BasketPage = () => {

    return (
        <div className="basket-page">
            <div className="showcase">
            <div className="showcase-left">
              <CartProducts className="showcase-left" />
            </div>
            <div className="showcase-right">
              <Basket className="showcase-right" />
            </div>
          </div>
        </div>
    )
}

export default BasketPage
