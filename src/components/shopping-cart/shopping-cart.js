import React, { useEffect } from "react";
import { Table, TD } from "./shopping-cart-style";
import ShoppingCartItem from "../shopping-cart-item/shopping-cart-item";

const ShoppingCartTable = ({
  shoppingCart = [],
  products = [],
  total,
  onIncrease,
  onDecrease,
  onDeleted /*onDecrease,onDelete*/,
}) => {

    function totalSum(){
        let sum=0;
        shoppingCart.map((item)=>{
            debugger
            sum=sum+item.total;
            return(<span>{sum}</span>)
        })
    }
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
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

      <div className="total">Total: {/*totalSum()**/}</div>

    </div>
  );
};
export default ShoppingCartTable;
