import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import './collections-list-item.css';
/* eslint-disable react/prop-types */
const CollectionsListItem = ({ collectionsItem }) => {
  const { title, image } = collectionsItem;
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
          {title}
        </CardContent>
      </Card>
    </>
  );
};

export default CollectionsListItem;