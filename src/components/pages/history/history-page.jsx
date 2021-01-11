import React from 'react';
import OrderhistoryList from '../../orderhistory-list';
import Sidebar from '../../sidebar';
import './history-page.scss';
const HistoryPage = () => 
<main className="main">
    <div className="main__container container">
  <section className="history__wrapper history wrapper">
    <h2 className="history__title">История заказов</h2>
    <OrderhistoryList/>
  </section>
  <Sidebar/>
  </div>
</main>

export default HistoryPage;