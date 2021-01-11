import { Typography, Grid, FormControl, Input, Button, InputAdornment, TextField, Paper } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import { useState, React } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import './order-form.scss';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  form__setdataBlock: {
    float: 'left'
  },

  form__resultBlock: {
    float: 'right'
  },

  timeBlock__control: {
    display: 'inline'
  },

  form__nameBlock: {
    display: 'block'
  }
}));

const OrderForm = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <form className="order__form form">
      <Grid className={clsx(classes.form__setdataBlock, classes.setDataBlock)}>
        <Grid className="setDataBlock__time timeBlock">
          <Typography className="timeBlock__title">Когда доставить</Typography>
          <FormControl className={clsx(classes.timeBlock__control, classes.control)}>
            <MuiPickersUtilsProvider className="timeBlock__provider" utils={DateFnsUtils}>
              <DatePicker className="timeBlock__datePicker" value={selectedDate} onChange={handleDateChange} />
              <TimePicker className="timeBlock__timePicker" value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>
        <Grid className="setDataBlock__place placeBlock">
          <Typography className="placeBlock__title">Куда доставить</Typography>
          <FormControl className="placeBlock__control control">
            <Input
              className="placeBlock__inputAddress inputAddress"
              label="Выберите адрес доставки"
              startAdornment={
                <InputAdornment className="inputAddress__wrapper" position="start">
                  <LocationOnIcon className="inputAddress__icon" />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={clsx(classes.form__nameBlock, classes.nameBlock)}>
            <TextField className="nameBlock__inputField"
              label="Имя"
            />
          </FormControl>
          <FormControl class="form__phoneBlock">
            <TextField className="phoneBlock__inputField"
              label="Телефон"
            />
          </FormControl>
        </Grid>
      </Grid>

      <Grid className={clsx(classes.form__resultBlock, classes.resultBlock)}>
        <TableContainer className="resultBlock__container" component={Paper}>
          <Table className="resultBlock__table">
            <TableBody className="resultBlock__body">
              <TableRow className="resultBlock__priceRow priceRow">
                <TableCell className="priceRow__title">Стоимость товаров</TableCell>
                <TableCell className="priceRow__price">200 584Р</TableCell>
              </TableRow>
              <TableRow classRow="resultBlock__delivery deliveryRow">
                <TableCell className="deliveryRow__title">Стоимость доставки</TableCell>
                <TableCell className="deliveryRow__price">200Р</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter className="resultBlock__footer">
              <TableRow className="resultBlock__totalRow totalRow">
                <TableCell className="totalRow__title">
                  Итого
                      </TableCell>
                <TableCell className="totalRow__price">
                  200 784Р
                      </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Button className="resultBlock__button">Сделать заказ</Button>
      </Grid>
    </form>
  );
};

export default OrderForm;