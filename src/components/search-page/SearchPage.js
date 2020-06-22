import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AnyOneResults, Button,
  ButtonInfo,
  ItemInfo,
  ItemInfoPrice,
  ItemInfoTitle,
  ItemStyle,
  Results
} from "./SearchPageStyled";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = ({ fetchProductsOnName, searchedProducts, fetchProductsOnCategory }) => {
  let query = useQuery();
  let assignment = query.get("w");

  useEffect(() => {
    if(query.get("w")) {
      fetchProductsOnName(query.get("w"))
    } else if (query.get("c")) {
      fetchProductsOnCategory(query.get("c"))
    }
  }, [query.get("w") || query.get("c")]);

  if (searchedProducts === undefined) {
    return null;
  }
  return searchedProducts.length > 0 ? (
    <Results>

        {searchedProducts.map((item) => (
          <ItemStyle>
            <img src={item.img} width='128px' height='128px'/>
            <ItemInfo>
              <ItemInfoTitle>{`${item.titleItem} ${item.model}`}</ItemInfoTitle>
              <ItemInfoPrice>{`${item.price} UAH`}</ItemInfoPrice>
              <Button> Купити </Button>
              <ButtonInfo> Подробніше </ButtonInfo>
            </ItemInfo>
          </ItemStyle>
        ))}

    </Results>
  ) : (
    <AnyOneResults> No results </AnyOneResults>
  );
};

export default SearchPage;
