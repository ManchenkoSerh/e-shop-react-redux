import React, { useEffect } from "react";
import { Link, useHistory, useLocation, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
import Spinner from "../spinner/spinner";

const SearchPage = ({
  fetchProductsOnName,
  searchedProducts,
  fetchProductsOnCategory,
  onIncrease,
  isLoading,
  isError,
}) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const { t } = useTranslation();

  let history = useHistory();

  useEffect(() => {
    if (!query.get("c") && !query.get("w")) {
      history.push(`/`);
    }
    if (query.get("w")) {
      fetchProductsOnName(query.get("w"));
    } else if (query.get("c")) {
      fetchProductsOnCategory(query.get("c"));
    }
  }, [query.get("w") || query.get("c")]);

  return isLoading ? (
    <Spinner />
  ) : isError ? (
    <Redirect to="/page-not-found" />
  ) : searchedProducts?.length > 0 ? (
    <Results>
      {searchedProducts.map((item) => (
        <ItemStyle key={item.id}>
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
      {t("On request") + ' "' + query.get("w") + '" ' + t("found 0 products")}
    </AnyOneResults>
  );
};
export default SearchPage;
