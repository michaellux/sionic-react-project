import React from 'react';
import OrderhistoryList from '../../orderhistory-list';
import Sidebar from '../../sidebar';
import './history-page.css';
const HistoryPage = () => 
<main>
  <section>
    История заказов
    <OrderhistoryList/>
  </section>
  <Sidebar/>
</main>

export default HistoryPage;