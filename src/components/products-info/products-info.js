import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Img,
  ListImg,
  ListItemImg,
  ProductInfoContainer,
} from "./products-info-style";
import VideoProduct from "./video-products";
import Comments from "../../container/list-comments/Comments";
import Characteristics from "../characteristics/characteristics";

const ProductsInfo = ({
  getProductInfo,
  productsInfo = [],
  fetchVideoInfo,
  videoUrl,
  fetchComments,
  comments = [],
}) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  useEffect(() => {
    getProductInfo(query.get("id"));
    //fetchVideoInfo(query.get("id"));
    fetchComments(query.get("id"));
  }, [query.get("id")]);
  console.log(comments);
  const { id, ...itemprops } = productsInfo;

  return (
    <ProductInfoContainer>
      <h1>{productsInfo.titleItem + " " + productsInfo.model}</h1>
      <Img src={productsInfo.img} />
      <ListImg>
        {productsInfo.imgPhotos != undefined
          ? productsInfo.imgPhotos.map((img) => {
              return (
                <li>
                  <ListItemImg src={img} />
                </li>
              );
            })
          : null}
      </ListImg>
      <Characteristics productsInfo={productsInfo} />
      <iframe
        src={`https://youtube.com/embed/${productsInfo.urlVideoId}`}
        width="500px"
        height="400px"
      />
      <Comments comments={comments} />
    </ProductInfoContainer>
  );
};
export default ProductsInfo;
