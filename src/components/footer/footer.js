import React from "react";
import { FooterContainer, GeneralInfo, SellerBlock } from "./footer-style";

const Footer = () => {
  return (
    <FooterContainer>
      <GeneralInfo>
        <SellerBlock>
          <h3>Покупцеві</h3>
          <ul>
            <li>Про товар</li>
            <li>Про товар</li>
            <li>Про товар</li>
          </ul>
        </SellerBlock>
        <SellerBlock>
          <h3>Продавцеві</h3>
          <ul>
            <li>Адреса</li>
            <li>Повернення товара </li>
            <li>Акції</li>
          </ul>
        </SellerBlock>
        <SellerBlock>
          <h3>Контакти</h3>
          <ul>
            <li>Режим роботи</li>
            <li>Місцезнаходження</li>
            <li>Про товар</li>
          </ul>
        </SellerBlock>
      </GeneralInfo>
    </FooterContainer>
  );
};
export default Footer;
