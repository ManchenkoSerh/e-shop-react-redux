import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = ({ fetchProductsOnName, searchedProducts }) => {

  let query = useQuery();

  useEffect(() => {
    fetchProductsOnName(query.get('w'))
    //getProductsOnName(query.get('name'))
  }, [query.get('w')]);

  if ( searchedProducts === undefined) {
    return null
  }
  console.log(searchedProducts)
  return searchedProducts[0].hasOwnProperty("id") ? (
    <ul>
      {" "}
      {searchedProducts.map((item) => (
        <li>{item.titleItem}</li>
      ))}{" "}
    </ul>
  ) : (
    <div> no </div>
  );
};

export default SearchPage;
