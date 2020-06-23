import React from "react";
import {Container, FooterContainer, GeneralInfo, SellerBlock, Wrapper} from "./footer-style";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <GeneralInfo>
          <SellerBlock>
            <h3>{t('For Customer')}</h3>
            <ul>
              <li>{t('About product')}</li>
              <li>{t('About product')}</li>
              <li>{t('About product')}</li>
            </ul>
          </SellerBlock>
          <SellerBlock>
            <h3>{t('For Sellers')}</h3>
            <ul>
              <li>{t('Address')}</li>
              <li>{t('Return product')} </li>
              <li>{t('Sale')}</li>
            </ul>
          </SellerBlock>
          <SellerBlock>
            <h3>{t('Contacts')}</h3>
            <ul>
              <li>{t('Working hours')}</li>
              <li>{t('Location')}</li>
              <li>{t('About product')}</li>
            </ul>
          </SellerBlock>
        </GeneralInfo>
      </Wrapper>
    </Container>
  );
};
export default Footer;
