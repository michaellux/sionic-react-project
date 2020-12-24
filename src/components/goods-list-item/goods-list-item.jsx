import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import './goods-list-item.css';
/* eslint-disable react/prop-types */
const GoodsListItem = ({ goodsItem }) => {
  const { title, image, categories, price, properties } = goodsItem;
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          title={title}
        />
        <CardContent>
          {categories}
          {price}
          {properties}
        </CardContent>
        <CardActions>
          <button>Добавить в корзину</button>
        </CardActions>
      </Card>
    </>
  );
};

export default GoodsListItem;
