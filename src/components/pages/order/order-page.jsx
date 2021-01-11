import React from 'react';
import OrderForm from '../../order';
import Sidebar from '../../sidebar';
import './order-page.scss';

const OrderPage = () =>
  <main className="main">
    <div className="main__container container">
    <section className="order__wrapper order wrapper">
      <h2 className="order__title">Доставка</h2>
      <OrderForm />
    </section>
    <Sidebar />
    </div>
  </main>
export default OrderPage;