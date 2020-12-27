import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import './orderhistory-list-item.css';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core';

const OrderhistoryListItem = ({ orderItem }) => {
  <li key={orderItem.key}>
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            MI
          </Avatar>
        }
        action={
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        }
        title="Xiaomi"
        subheader="21.12.2020"
      />
      <Button>Подробнее</Button>
      <Collapse>
        <CardContent>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    Статус заказа
                  </TableCell>
                  <TableCell>
                    Оплачен/Завершён
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Номер заказа
                  </TableCell>
                  <TableCell>
                    #664-333
                  </TableCell>
                </TableRow>
              </TableBody>
              </Table>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    Кол-во товаров
                  </TableCell>
                  <TableCell>
                    4 шт.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Стоимость заказа
                  </TableCell>
                  <TableCell>
                    250 000Р
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Адрес заказа
                  </TableCell>
                  <TableCell>
                    ул. Коммунистич...д.1, стр. 1
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
    </Card>
  </li>
}

export default OrderhistoryListItem;