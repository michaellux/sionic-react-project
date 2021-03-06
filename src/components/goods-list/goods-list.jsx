import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GoodsListItem from '../goods-list-item';
import './goods-list.css';
/* eslint-disable react/prop-types */
class GoodsList extends Component {
  render() {
    const { goods } = this.props;
    return (
      <Paper className="goods__list list" container spacing={3}>
        {
          Array.isArray(goods) ? goods.map((goodsItem) => (
            <Grid className="list__wrapper" item xs={6} sm={3} key={goodsItem.id}>
              <GoodsListItem className="list__item" goodsItem={goodsItem} />
            </Grid>
          )) : ('Товаров нет')
        }
      </Paper>
    );
  }
}

export default GoodsList;