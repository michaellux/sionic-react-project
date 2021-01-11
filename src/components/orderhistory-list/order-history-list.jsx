import React, { Component } from 'react';
import OrderhistoryListItem from '../orderhistory-list-item';
import Grid from '@material-ui/core/Grid';
import './order-history-list.css';
/* eslint-disable react/prop-types */
class OrderhistoryList extends Component {
  render() {
    const { orders } = this.props;
    return (
        <Grid container className="history__list list">
          {
            Array.isArray(orders) ? orders.map((orderItem) => (
              <OrderhistoryListItem orderItem={orderItem} key={orderItem.id} />
            )) : ('Заказов нет')
          }
        </Grid>
    );
  }
}

export default OrderhistoryList;