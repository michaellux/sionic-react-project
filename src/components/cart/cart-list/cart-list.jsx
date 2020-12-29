import React, { Component } from 'react';
import CartListItem from '../cart-list-item';
import Paper from '@material-ui/core/Paper';
import './cart-list.scss';
/* eslint-disable react/prop-types */
class CartList extends Component {
  render() {
    const { goodsInCart } = this.props;
    return (
      <Paper className="cart__goodslist goodslist">
        {
          Array.isArray(goodsInCart) ? goodsInCart.map((goodsInCartItem) => (
            <CartListItem goodsInCartItem={goodsInCartItem} key={goodsInCartItem.id} />
          )) : ('Товаров в корзине нет')
        }
      </Paper>
    );
  }
}

export default CartList;