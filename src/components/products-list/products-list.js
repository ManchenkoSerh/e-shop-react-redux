import React, { useEffect } from "react";
import ProductsListItem from "../products-list-items/products-list-items";
import { Container } from "./products-list-style";
import Slider from "../Slider/slider";
import { Wrapper } from "../footer/footer-style";
import Spinner from "../spinner/spinner";
import ToUp from "../to-up/ToUp";
import {Redirect} from "react-router-dom";

const ProductsList = ({
  products = [],
  fetchProducts,
  onIncrease,
  deletedUrl,
  isLoading,
  isError,
}) => {
  async function parseProducts() {
    await fetchProducts();
  }
  useEffect(() => {
    parseProducts();
    deletedUrl();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
          <Redirect to="/page-not-found"/>
      ) : (
        <div>
          <Wrapper>
            <Slider />
          </Wrapper>
          <ToUp/>
          <Container>
            {products.map((item) => {
              const { id, ...itemprops } = item;
              return (
                <ProductsListItem
                  item={item}
                  onIncrease={() => onIncrease(id)}
                  key={item.id}
                />
              );
            })}
          </Container>
        </div>
      )}
    </div>
  );
};
export default ProductsList;
