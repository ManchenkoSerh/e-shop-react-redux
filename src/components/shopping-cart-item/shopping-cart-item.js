import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import {
  BtnDecrement,
  BtnDelete,
  BtnIncrement,
  CartName,
  ImgProduct,
  InfoCart,
  ProductPrice,
  Quantity,
  TableItem,
  TotalSum,
} from "./shopping-cart-item-style";

const ShoppingCartItem = ({ item, onIncrease, onDecrease, onDeleted }) => {
  const { t } = useTranslation();
  // const {name,price,count}=items
    console.log(item)
  return (
    <TableItem>
      <BtnDelete onClick={onDeleted}>X</BtnDelete>
      <ImgProduct src={item.img} />
      <InfoCart>
        <CartName>{item.name + " " + item.model}</CartName>
        <br />
        <ProductPrice>{item.price}$</ProductPrice>
      </InfoCart>
      <Quantity>
        <BtnIncrement onClick={onDecrease}>-</BtnIncrement>
        <span>{item.count}</span>
        <BtnIncrement onClick={onIncrease}>+</BtnIncrement>
      </Quantity>
      <TotalSum>
        {t("Sum")}
        <br />
        {item.total}$
      </TotalSum>
    </TableItem>
  );
};
export default ShoppingCartItem;
