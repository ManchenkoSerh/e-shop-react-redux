import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AnyOneResults,
  Button,
  ButtonInfo,
  ItemInfo,
  ItemInfoPrice,
  ItemInfoTitle,
  ItemStyle,
  Results,
} from "./SearchPageStyled";
import { useTranslation } from "react-i18next";
import Spinner from "../spinner/spinner";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = ({
  fetchProductsOnName,
  searchedProducts,
  fetchProductsOnCategory,
  onIncrease,
  isLoading,
}) => {
  const { t } = useTranslation();
  let query = useQuery();
  let assignment = query.get("w");

  useEffect(() => {
    if (query.get("w")) {
      fetchProductsOnName(query.get("w"));
    } else if (query.get("c")) {
      fetchProductsOnCategory(query.get("c"));
    }
  }, [query.get("w") || query.get("c")]);

  if (searchedProducts === undefined) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }
  console.log(searchedProducts);
  return searchedProducts.length > 0 ? (
    <Results>
      {searchedProducts.map((item) => (
        <ItemStyle>
          <img src={item.img} width="180px" height="180px" />
          <ItemInfo>
            <ItemInfoTitle>{`${item.titleItem} ${item.model}`}</ItemInfoTitle>
            <ItemInfoPrice>{`${item.price} $`}</ItemInfoPrice>
            <Button onClick={() => onIncrease(item.id)}> {t("Buy")} </Button>
            <Link to={`/info?id=${item.id}`}>
              <ButtonInfo> {t("Details")} </ButtonInfo>
            </Link>
          </ItemInfo>
        </ItemStyle>
      ))}
    </Results>
  ) : (
    <AnyOneResults> {t("No results")} </AnyOneResults>
  );
};

export default SearchPage;
