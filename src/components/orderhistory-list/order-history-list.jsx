import React, { Component } from 'react';
import OrderhistoryListItem from '../orderhistory-list-item';
import Container from '@material-ui/core/Container';
import './order-history-list.css';
/* eslint-disable react/prop-types */
class OrderhistoryList extends Component {
  render() {
    const { orders } = this.props;
    return (
      <ul>
        <Container>
          {
            Array.isArray(orders) ? orders.map((orderItem) => (
              <OrderhistoryListItem orderItem={orderItem} key={orderItem.id} />
            )) : ('Заказов нет')
          }
        </Container>
      </ul>
    );
  }
}

export default OrderhistoryList;