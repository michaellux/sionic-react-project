import React from 'react';
import './cart-page.scss';
import Cart from '../../cart';
import Sidebar from '../../sidebar';
const CartPage = () =>
  <main className="main">
    <div className="main__container container">
      <section className="main__wrapper wrapper">
      <h2 className="main___cartTitle">Корзина</h2>
      <button className="main__cartClearButton">Очистить корзину</button>
      <Cart />
    </section>
    </div>
    <Sidebar />
  </main>

export default CartPage;