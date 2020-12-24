import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GoodsListItem from '../goods-list-item';
import './goods-list.css';
/* eslint-disable react/prop-types */
class GoodsList extends Component {
  render() {
    const { goods } = this.props;
    return (
      <Grid container spacing={3}>
        {
          Array.isArray(goods) ? goods.map((goodsItem) => (
            <Grid item xs={6} sm={3} key={goodsItem.id}>
              <GoodsListItem goodsItem={goodsItem} />
            </Grid>
          )) : ('Товаров нет')
        }
      </Grid>
    );
  }
}

export default GoodsList;