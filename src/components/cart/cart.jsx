import React from 'react';
import CartTotal from './cart-total';
import CartList from './cart-list';
const Cart = () => {
  return (
    <div className="main__cart cart">
      <CartTotal />
      <CartList />
    </div>
  )
}

export default Cart;