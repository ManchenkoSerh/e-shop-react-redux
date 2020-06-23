import React from "react";

const Characteristics=({productsInfo})=>{
    return(
        <div>
            <h2>Характеристики</h2>
            <ul>
                {productsInfo.imgPhotos != undefined
                    ? productsInfo.specifications.map((item) => {
                        return <li>{item.key + "..................." + item.value}</li>;
                    })
                    : null}
            </ul>
        </div>
    )
}
export default Characteristics;
