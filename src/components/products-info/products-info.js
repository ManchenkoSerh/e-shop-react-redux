import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Button,
    GeneralInfoToProduct,
    Img, ImgInfoToProduct,
    ListImg,
    ListItemImg,
    ProductInfoContainer, ProductPrice, VideoInfo,
} from "./products-info-style";
import VideoProduct from "./video-products";
import Comments from "../../container/list-comments/Comments";
import Characteristics from "../characteristics/characteristics";
import {useTranslation} from "react-i18next";

const ProductsInfo = ({
  getProductInfo,
  productsInfo = [],
  fetchVideoInfo,
  videoUrl,
  fetchComments,
  comments = [],
  saveUrl,
  urlSave,
  shoppingCart,
  onIncrease,
  products,
  deletedUrl,
}) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  useEffect(() => {
    //deletedUrl();
    getProductInfo(query.get("id"));
    fetchComments(query.get("id"));
  }, [query.get("id")]);

  const changePhoto = (img) => {
    saveUrl(img.currentTarget.src);
  };

  const {t} = useTranslation()
  return (
    <ProductInfoContainer>
      <div style={{display: 'flex'}}>
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
          <Button onClick={() => onIncrease(productsInfo.id)}>
            {t('Buy')}
          </Button>
        </GeneralInfoToProduct>
      </div>
      <Characteristics productsInfo={productsInfo} />
      <VideoInfo>
        {/*<h2>Відеоогляд</h2>*/}
        <iframe
          src={`https://youtube.com/embed/${productsInfo.urlVideoId}`}
          width="100%"
          height="800px"
        />
      </VideoInfo>

      <Comments comments={comments} />
    </ProductInfoContainer>
  );
};
export default ProductsInfo;
