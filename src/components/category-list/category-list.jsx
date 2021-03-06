import React, { Component } from 'react';
import CategoryListItem from '../category-list-item';
import Paper from '@material-ui/core/Paper';
import './category-list.css';
/* eslint-disable react/prop-types */
class CategoryList extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Paper className="goods__categoryList categoryList" component="ul">
        {
          Array.isArray(categories) ? categories.map((categoryItem) => (
            <CategoryListItem className="categoryList__item" categoryItem={categoryItem} key={categoryItem.id}/>
          )) : ('Категорий нет')
        }
      </Paper>
    );
  }
}

export default CategoryList;