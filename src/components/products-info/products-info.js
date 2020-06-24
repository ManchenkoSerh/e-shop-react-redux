import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
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
} from "./products-info-style";
import VideoProduct from "./video-products";
import Comments from "../../container/list-comments/Comments";
import Characteristics from "../characteristics/characteristics";
import { useTranslation } from "react-i18next";
import Spinner from "../spinner/spinner";

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
  isLoading,
  isError,
}) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  useEffect(() => {
    //deletedUrl();
    getProductInfo(query.get("id"));
    fetchComments(query.get("id"));
    window.scrollTo(0, 0);
    const top = document.querySelector(".top");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        top.style.display = "block";
      } else {
        top.style.display = "none";
      }
    });
  }, [query.get("id")]);

  const { t } = useTranslation();
  const changePhoto = (img) => {
    saveUrl(img.currentTarget.src);
  };
  const toTop = () => {
    const top = document.querySelector(".top"); //let scroll=document.querySelector(".scroll");
    top.style.display = "none";
    window.scrollTo(0, 0);
  };

  // if(isLoading){
  //   return <Spinner/>
  // }
  return (
      <ProductInfoContainer className="scroll">
        <ToTop className="top" onClick={toTop}>
          Top
        </ToTop>
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
              Додати в корзину
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
