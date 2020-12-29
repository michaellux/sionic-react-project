import React from 'react';
import './goods-page.scss';
import CategoryList from '../../category-list';
import GoodsList from '../../goods-list';
import Sidebar from '../../sidebar';
const GoodsPage = () =>
  <main className="main">
    <div className="main__container container">
      <section className="goods__wrapper goods wrapper">
          <h2 className="goods__categoryTitle">Категории товаров</h2>
          <a className="goods__categorySettings" href="#">Настройки</a>
          <CategoryList />
          <GoodsList />
          <button className="goods__moreButton">Показать больше товаров</button>
        </section>
    </div>
    <Sidebar />
  </main>



export default GoodsPage;
