import { Container, Typography, Grid, FormControl, Input, Button, InputAdornment, TextField, Paper } from '@material-ui/core';
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
const OrderForm = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <Container>
      <form>
        <Grid>
          <Grid>
            <Typography>Когда доставить</Typography>
            <FormControl>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={selectedDate} onChange={handleDateChange} />
                <TimePicker value={selectedDate} onChange={handleDateChange} />
              </MuiPickersUtilsProvider>
            </FormControl>
          </Grid>
          <Grid>
            <Typography>Куда доставить</Typography>
            <FormControl>
              <Input
                label="Выберите адрес доставки"
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl>
              <TextField
                label="Имя"
              />
            </FormControl>
            <FormControl>
              <TextField
                label="Телефон"
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Стоимость товаров</TableCell>
                  <TableCell>200 584Р</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Стоимость доставки</TableCell>
                  <TableCell>200Р</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>
                    Итого
                      </TableCell>
                  <TableCell>
                    200 784Р
                      </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          <Button>Сделать заказ</Button>
        </Grid>
      </form>
    </Container>
  );
};

export default OrderForm;