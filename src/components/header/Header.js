import React, { useState } from "react";
import {
  Input,
  Wrapper,
  Container,
  Catalog,
  CatalogInner,
  CatalogButton,
  Categories,
  Favorite,
  Cart,
  MainButton, ChangeLanguage,
} from "./Header-style";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [inputState, setInputState] = useState("");
  const { t, i18n } = useTranslation();

  let history = useHistory();

  function handleClick(word) {
    setInputState("");
    history.push(`/search?w=${word}`);
  }

  const inputOnChangeHandler = (e) => {
    setInputState(e.target.value);
  };

  const inputOnKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      handleClick(inputState);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <img
            src="https://www.foxtrot.com.ua/dist/images/content/subscribe.png"
            width="64px"
            height="64px"
          />
        </Link>
        <Catalog>
          <CatalogButton>{t("Catalog")}</CatalogButton>
          <CatalogInner>
            <Link to="/search?c=phone">
              <Categories>{t("Phones")}</Categories>
            </Link>
            <Link to="/search?c=laptop">
              <Categories>{t("Laptops")}</Categories>
            </Link>
            <Link to="/search?c=TV">
              <Categories>{t("Other")}</Categories>
            </Link>
          </CatalogInner>
        </Catalog>
        <Input
          type="text"
          placeholder={t("I looking for")}
          onChange={inputOnChangeHandler}
          onKeyPress={inputOnKeyPressHandler}
          value={inputState}
        />
        <Link to="/favorites"><Favorite>♥</Favorite></Link>
        <Link to="/shopping-cart">
          <Cart>{t("Cart")}</Cart>
        </Link>
        <ChangeLanguage onClick={() => changeLanguage("en")}>En |</ChangeLanguage>
        <ChangeLanguage onClick={() => changeLanguage("ua")}>Ua</ChangeLanguage>
      </Wrapper>
    </Container>
  );
};

export default Header;
