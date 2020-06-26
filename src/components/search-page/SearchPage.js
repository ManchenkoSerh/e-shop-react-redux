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
import {Redirect} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = ({
  fetchProductsOnName,
  searchedProducts,
  fetchProductsOnCategory,
  onIncrease,
  isLoading,
                      isError
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


  return isLoading ? (
    <Spinner />
  ) : isError ?
      (<Redirect to="/page-not-found"/>):
      searchedProducts.length > 0 ? (
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
    <AnyOneResults>
      {t("On request") +
        ' "' +
        query.get("w") +
        '" ' +
        t("found 0 products")}
    </AnyOneResults>
  );
};
export default SearchPage;
