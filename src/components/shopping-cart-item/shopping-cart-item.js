import React, {useEffect} from "react";
import {
    BtnDecrement, BtnDelete,
    BtnIncrement,
    CartName, ImgProduct,
    InfoCart,
    ProductPrice, Quantity,
    TableItem,
    TotalSum,
} from "./shopping-cart-item-style";

const ShoppingCartItem = ({ item, onIncrease, onDecrease, onDeleted }) => {
  // const {name,price,count}=items
  return (
    <TableItem>
        <BtnDelete onClick={onDeleted}>X</BtnDelete>
      <ImgProduct src={item.img} />
      <InfoCart>
        <CartName>{item.name+" "+item.model}</CartName>
        <br />
        <ProductPrice>{item.price}$</ProductPrice>
      </InfoCart>
        <Quantity>
      <BtnIncrement onClick={onDecrease}>-</BtnIncrement>
      <span>{item.count}</span>
      <BtnIncrement onClick={onIncrease}>+</BtnIncrement>
        </Quantity>
      <TotalSum>Сума<br/>{item.total}$</TotalSum>
    </TableItem>
  );
};
export default ShoppingCartItem;
