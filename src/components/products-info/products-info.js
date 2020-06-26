import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AddToFavorite,
  Button,
  GeneralInfoToProduct,
  Img,
  ImgInfoToProduct,
  ListImg,
  ListItemImg,
  ProductInfoContainer,
  ProductPrice,
  ToTop,
  VideoInfo,
  VideoReview,
} from "./products-info-style";
import Comments from "../../container/list-comments/Comments";
import Characteristics from "../characteristics/characteristics";
import { useTranslation } from "react-i18next";
import Spinner from "../spinner/spinner";
import ToUp from "../to-up/ToUp";
import {Redirect} from "react-router-dom"

const ProductsInfo = ({
  getProductInfo,
  productsInfo = [],
                        fetchProducts,
  videoUrl,
  fetchComments,
  comments = [],
  saveUrl,
  urlSave,
  shoppingCart,
  onIncrease,
  products,
  deletedUrl,
  isLoading,
  isError,
                        toggleFavorite
}) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  async function parseProducts() {
    await fetchProducts();
  }
  useEffect(() => {
    parseProducts();
    getProductInfo(query.get("id"));
    fetchComments(query.get("id"));
    window.scrollTo(0, 0);
  }, [query.get("id")]);

  const { t } = useTranslation();
  const changePhoto = (img) => {
    saveUrl(img.currentTarget.src);
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
          <Redirect to="/page-not-found"/>
      ) :(query.get("id")=="")?(
          <Redirect to="/page-not-found"/>
          ) : (
        <ProductInfoContainer className="scroll">
          <ToUp />
          <div style={{ display: "flex" }}>
            <ImgInfoToProduct>
              <ListImg>
                {productsInfo.imgPhotos != undefined
                  ? productsInfo.imgPhotos.map((img) => {
                      return (
                        <li>
                          <ListItemImg onClick={changePhoto} src={img} />
                        </li>
                      );
                    })
                  : null}
              </ListImg>
              <Img src={urlSave == undefined ? productsInfo.img : urlSave} />
            </ImgInfoToProduct>
            <GeneralInfoToProduct>
              <h1>{productsInfo.titleItem + " " + productsInfo.model}</h1>
              <ProductPrice>{productsInfo.price}$</ProductPrice>
              <AddToFavorite onClick={()=> {
                toggleFavorite(productsInfo.id, {
                  ...productsInfo,
                  favorite: !productsInfo.favorite
                })
              }

              }>♥</AddToFavorite>
              <Button onClick={() => onIncrease(productsInfo.id)}>
                {t("Add to cart")}
              </Button>
            </GeneralInfoToProduct>
          </div>
          <Characteristics productsInfo={productsInfo} />
          <VideoInfo>
            <VideoReview>{t("Video view")}</VideoReview>
            <iframe
              src={`https://youtube.com/embed/${productsInfo.urlVideoId}`}
              width="100%"
              height="800px"
            />
          </VideoInfo>
          <Comments comments={comments} />
        </ProductInfoContainer>
      )}
    </div>
  );
};
export default ProductsInfo;
