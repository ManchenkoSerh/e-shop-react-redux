import React, { useEffect } from "react";
import { Table, TD } from "./shopping-cart-style";
import ShoppingCartItem from "../shopping-cart-item/shopping-cart-item";
import {useTranslation} from "react-i18next";

const ShoppingCartTable = ({
  shoppingCart = [],
  products = [],
  total,
  onIncrease,
  onDecrease,
  onDeleted /*onDecrease,onDelete*/,
}) => {
  let sum = 0;
  function totalSum() {
    shoppingCart.map((item) => {
      sum = sum + item.total;
    });
    return <span>{sum}</span>;
  }

  const { t } = useTranslation();
  //console.log(a)
  return (
    <div className="shopping-cart-table">
      <h2>{t('Shopping Cart')}</h2>
      <ul>
        {shoppingCart.map((item) => {
          const { id, ...itemprop } = item;
          return (
            <li key={id}>
              <ShoppingCartItem
                item={item}
                onIncrease={() => onIncrease(id)}
                onDecrease={() => onDecrease(id)}
                onDeleted={() => onDeleted(id)}
              />
            </li>
          );
        })}
      </ul>

      <div className="total">{t('Subtotal')}: {totalSum()}</div>
    </div>
  );
};
export default ShoppingCartTable;
