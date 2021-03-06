import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import './app.scss';
import GoodsPage from '../pages/goods';
import CartPage from '../pages/cart';
import OrderPage from '../pages/order';
import HistoryPage from "../pages/history";
import Footer from '../footer';
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          component={GoodsPage}
        />
        <Route
          path="/goods"
          component={GoodsPage}
        />
        <Route
          path="/cart"
          component={CartPage}
        />
        <Route
          path="/order"
          component={OrderPage}
        />
        <Route
          path="/history"
          component={HistoryPage}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
