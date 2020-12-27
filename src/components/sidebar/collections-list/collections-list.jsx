import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CollectionsListItem from '../collections-list-item';
import './collections-list.css';
/* eslint-disable react/prop-types */
class CollectionsList extends Component {
  render() {
    const { collections } = this.props;
    return (
      <Grid container spacing={3}>
        {
          Array.isArray(collections) ? collections.map((collectionsItem) => (
            <Grid item xs={6} sm={3} key={collections.id}>
              <CollectionsListItem goodsItem={collectionsItem} />
            </Grid>
          )) : ('Коллекций нет')
        }
      </Grid>
    );
  }
}

export default CollectionsList;