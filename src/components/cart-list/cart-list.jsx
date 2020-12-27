import React, { Component } from 'react';
import CartListItem from '../cart-list-item';
import Container from '@material-ui/core/Container';
import './cart-list.css';
/* eslint-disable react/prop-types */
class CartList extends Component {
  render() {
    const { goodsInCart } = this.props;
    return (
      <Container>
        {
          Array.isArray(goodsInCart) ? goodsInCart.map((goodsInCartItem) => (
            <CartListItem goodsInCartItem={goodsInCartItem} key={goodsInCartItem.id} />
          )) : ('Товаров в корзине нет')
        }
      </Container>
    );
  }
}

export default CartList;