import React from "react";
import { Button, ButtonInfo, Img, Item } from "./products-list-items-style";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductsListItem = ({ item, onIncrease }) => {
  const { t } = useTranslation();
  return (
    <Item>
      <div>
        <Img src={item.img} />
      </div>
      <div>
        <h3>
          {item.titleItem} <span>{item.model}</span>
        </h3>
        <span>{item.price}$</span>
        <br />
        <Button onClick={onIncrease}>{t("Buy")}</Button>
        <Link to={`/info?id=${item.id}`}>
          <ButtonInfo>{t("Details")}</ButtonInfo>
        </Link>
      </div>
    </Item>
  );
};
export default ProductsListItem;
