import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './cart-list-item.css';

const CartListItem = ({ goodsincartItem }) => {
    <Paper>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <img src="" alt={goodsincartItem.title}/>
        </Grid>
        <Grid container wrap="nowrap">
          <Typography>{goodsincartItem.title}</Typography>
          <Typography>{goodsincartItem.properties}</Typography>
        </Grid>
        <Grid item>
          <Button>
            +
          </Button>
          <TextField />
          <Button>
            -
          </Button>
          <Grid container wrap="nowrap">
            <Typography>{goodsincartItem.currentPrice}</Typography>
            <Typography>{goodsincartItem.oldPrice}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
}

export default CartListItem;