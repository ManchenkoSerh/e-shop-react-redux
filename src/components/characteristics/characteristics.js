import React from "react";
import {
  Characteristic,
  CharacteristicItem,
  FeatureLeft,
  FeatureRight,
  Key,
  ListCharacteristics,
  Value,
} from "./characteristics-style";
import { useTranslation } from "react-i18next";

const Characteristics = ({ productsInfo }) => {
  const { t } = useTranslation();
  return (
    <Characteristic>
      <h2>{t("Specifications")}</h2>
      <ListCharacteristics>
        {productsInfo.imgPhotos != undefined
          ? productsInfo.specifications.map((item) => {
              return (
                <CharacteristicItem>
                  <FeatureLeft>{item.key}</FeatureLeft>
                  <FeatureRight>{item.value}</FeatureRight>
                </CharacteristicItem>
              );
            })
          : null}
      </ListCharacteristics>
    </Characteristic>
  );
};
export default Characteristics;
