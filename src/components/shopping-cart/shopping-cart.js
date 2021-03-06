import React, { useEffect } from "react";
import {ButtonOrder, Table, TD, TotalSum} from "./shopping-cart-style";
import ShoppingCartItem from "../shopping-cart-item/shopping-cart-item";
import {useTranslation} from "react-i18next";
import {
    CommentsContainer,
    ExitModal,
    Form,
    Modal,
    ModalContent,
    Submit,
    TextArea,
    TextBox
} from "../comments/comments-style";
import ShoppingCartModal from "./shopping-cart-modal";
import {fetchProducts} from "../../redux/action/actions";

const ShoppingCartTable = ({
  shoppingCart = [],
  products = [],
  total,
  onIncrease,
  onDecrease,
  onDeleted /*onDecrease,onDelete*/,fetchProducts
}) => {
  let sum = 0;
  function totalSum() {
    shoppingCart.map((item) => {
      sum = sum + item.total;
    });
    return <span>{sum}</span>;
  }

  useEffect( () => {
    fetchProducts()
  },[])
  const { t } = useTranslation();
  return (
    <div className="shopping-cart-table">
      <h2 style={{padding: "15px 15px"}}>{t('Shopping Cart')}</h2>
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
      <TotalSum>{t('Subtotal')}: {totalSum()}$</TotalSum>
        <ShoppingCartModal/>
    </div>
  );
};
export default ShoppingCartTable;
