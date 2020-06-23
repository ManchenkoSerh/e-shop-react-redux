import React, { useEffect } from "react";
import ProductsListItem from "../products-list-items/products-list-items";
import { Container } from "./products-list-style";

const ProductsList = ({ products = [], fetchProducts, onIncrease,deletedUrl }) => {
  async function parseProducts() {
    await fetchProducts();
  }
  useEffect(() => {
    parseProducts();
    deletedUrl();
  }, []);

  return (
    <Container>
      {products.map((item) => {
        const { id, ...itemprops } = item;
        return (
          <ProductsListItem item={item} onIncrease={() => onIncrease(id)} />
        );
      })}
    </Container>
  );
};
export default ProductsList;
