import React from "react";
import {
  Input,
  Wrapper,
  Container,
  Catalog,
  CatalogInner,
  CatalogButton,
  Categories,
  Favorite,
  Cart
} from "./Header-style";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Catalog>
            <CatalogButton>Catalog</CatalogButton>
            <CatalogInner>
              <Link to='/?category='><Categories>Link 1</Categories></Link>
              <Categories>Link 2</Categories>
              <Categories>Link 3</Categories>
            </CatalogInner>
          </Catalog>
          <Input type="text" placeholder="I`m looking for ..." />
          <Favorite>♥</Favorite>
          <Cart>Cart</Cart>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header