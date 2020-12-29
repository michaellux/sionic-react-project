import React from 'react';
import './cart-total.scss';
const CartTotal = () => {
  return (
    <div className="cart__total total">
      <span className="total__mainItem">Xiaomi</span>
      <div className="total__sumBlock sumBlock">
        <span className="sumBlock__title">Стоимость корзины</span>
        <strong className="sumBlock__result">1 185 000Р</strong>
      </div>
      <button className="total__button">Оформить</button>
      <img className="total__img" src="#" alt="cart"/>
    </div>
  )
}

export default CartTotal;