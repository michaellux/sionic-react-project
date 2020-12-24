import React from 'react';
import './goods-page.css';
import CategoryList from '../../category-list';
import GoodsList from '../../goods-list';
import Sidebar from '../../sidebar';
const GoodsPage = () =>
  <main>
    <section>
      <h2>Категории товаров</h2>
      <CategoryList/>
      <GoodsList/>
      <button>Показать больше товаров</button>
    </section>
    <Sidebar />
  </main>



export default GoodsPage;
