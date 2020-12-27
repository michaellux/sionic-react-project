import React from 'react';
import OrderForm from '../../order';
import Sidebar from '../../sidebar';
import './order-page.css';

const OrderPage = () =>
  <main>
    <section>
      Доставка
      <OrderForm />
    </section>
    <Sidebar />
  </main>
export default OrderPage;