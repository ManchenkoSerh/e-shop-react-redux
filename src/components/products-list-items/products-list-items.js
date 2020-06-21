import React from "react";
import { Button, ButtonInfo, Img, Item } from "./products-list-items-style";
import { Link } from "react-router-dom";

const ProductsListItem = ({ item, onIncrease }) => {

  return (
    <Item>
      <Img src={item.img} />
      <h3>
        {item.titleItem} <span>{item.model}</span>
      </h3>
      <span>{item.price}$</span>
      <br />
      <Button onClick={onIncrease}>Купити</Button>
      <Link to={`/info?id=${item.urlVideoId}`}>
        <ButtonInfo>Детальніше</ButtonInfo>
      </Link>
    </Item>
  );
};
export default ProductsListItem;
