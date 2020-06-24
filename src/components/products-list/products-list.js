import React, { useEffect } from "react";
import ProductsListItem from "../products-list-items/products-list-items";
import { Container } from "./products-list-style";
import Slider from "../Slider/slider";

const ProductsList = ({ products = [], fetchProducts, onIncrease,deletedUrl }) => {
  async function parseProducts() {
    await fetchProducts();
  }
  useEffect(() => {
    parseProducts();
    deletedUrl();
  }, []);

  return (
      <div>
        <Slider/>
    <Container>
      {products.map((item) => {
        const { id, ...itemprops } = item;
        return (
          <ProductsListItem item={item} onIncrease={() => onIncrease(id)} />
        );
      })}
    </Container>
      </div>
  );
};
export default ProductsList;
