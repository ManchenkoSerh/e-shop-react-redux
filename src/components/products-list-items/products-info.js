import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";

const ProductsInfo=({getProductInfo,productsInfo})=>{
    function useQuery(){
        return new URLSearchParams(useLocation().search)
    }

    let query=useQuery();

    useEffect(()=>{
        getProductInfo(query.get("id"))
    },[query.get("id")])
console.log(productsInfo)

    return(
        <div>
            <h3>{productsInfo.titleItem+" "+productsInfo.model}</h3>
            <img src={productsInfo.img}/>

        </div>
    )
}
export default ProductsInfo
