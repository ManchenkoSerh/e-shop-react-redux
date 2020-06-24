import React, { useEffect } from "react";
import ProductsListItem from "../products-list-items/products-list-items";
import { Container } from "./products-list-style";
import Slider from "../Slider/slider";
import Spinner from "../spinner/spinner";

const ProductsList = ({ products = [], fetchProducts, onIncrease,deletedUrl, isLoading,isError}) => {
  async function parseProducts() {
    await fetchProducts();
  }
  useEffect(() => {
    parseProducts();
    deletedUrl();
  }, []);

  return (
      <div>{isLoading?(<Spinner/>):isError?(<p>Error</p>):(
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
      )}

      </div>
  );
};
export default ProductsList;
