import React from 'react';
import Chip from '@material-ui/core/Chip';
import './category-list-item.css';

const CategoryListItem = ({ categoryItem }) => {
  <li key={categoryItem.key}>
    <Chip
      label={categoryItem.label}
    />
  </li>
}

export default CategoryListItem;

