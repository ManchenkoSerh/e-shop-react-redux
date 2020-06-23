import React from "react";
import {
    Characteristic,
    CharacteristicItem,
    FeatureLeft, FeatureRight,
    Key,
    ListCharacteristics,
    Value
} from "./characteristics-style";

const Characteristics=({productsInfo})=>{
    return(
        <Characteristic>
            <h2>Характеристики</h2>
            <ListCharacteristics>
                {productsInfo.imgPhotos != undefined
                    ? productsInfo.specifications.map((item) => {
                        return(
                            <CharacteristicItem>
                            <FeatureLeft>{item.key}</FeatureLeft>
                                <FeatureRight>{item.value}</FeatureRight>
                        </CharacteristicItem>
                        );
                    })
                    : null}
            </ListCharacteristics>
        </Characteristic>
    )
}
export default Characteristics;
