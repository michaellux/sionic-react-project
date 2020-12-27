import React from 'react';
import './cart-page.css';
import Cart from '../../cart';
import Sidebar from '../../sidebar';
const CartPage = () =>
  <main>
    <section>
      <h2>Корзина</h2>
      <button>Очистить корзину</button>
      <Cart />
    </section>
    <Sidebar />
  </main>

export default CartPage;