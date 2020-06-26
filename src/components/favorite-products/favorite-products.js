import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {ButtonInfo, FavoriteContainer, ImgProduct, NameProduct} from "./favorite-products-style";
import {useTranslation} from "react-i18next";

const FavoriteProducts=({fetchProducts,favorite=[],filterFavoriteProduct,products,onIncrease})=>{
    // async function parseProducts() {
    //     await fetchProducts();
    //
    // }
    async function parsefavoriteProd(){
        await filterFavoriteProduct(products)
    }
    const { t } = useTranslation();
    useEffect(()=>{
        //parseProducts();
        parsefavoriteProd()
    },[])
    console.log(favorite)
    return(
        <div>
            {favorite.map(item=>(
                <FavoriteContainer>
                <ImgProduct src={item.img}/>
                    <NameProduct>{`${item.titleItem} ${item.model}`}</NameProduct><br/>

                    <Link to={`/info?id=${item.id}`}>
                        <ButtonInfo>{t("Details")}</ButtonInfo>
                    </Link>
                </FavoriteContainer>
                )

            )}
    </div>
    )

}
export default FavoriteProducts
