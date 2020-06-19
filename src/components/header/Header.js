import React, {useState} from "react";
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
import { Link, useHistory} from 'react-router-dom'

const Header = () => {
  const [inputState, setInputState] = useState('')

  let history = useHistory();

  function handleClick(word) {
    setInputState('')
    history.push(`/search?w=${word}`);
  }

  const inputOnChangeHandler = (e) => {
    setInputState(e.target.value)
  }

  const inputOnKeyPressHandler = (e) => {
    if(e.key==='Enter') {
      handleClick(inputState)
    }
  }

  return (
      <Container>
        <Wrapper>
          <CatalogButton><Link to='/'>MainPage</Link></CatalogButton>
          <Catalog>
            <CatalogButton>Catalog</CatalogButton>
            <CatalogInner>
              <Link to='/category?n='><Categories>Phones</Categories></Link>
              <Link to='/category?n='><Categories>Laptops</Categories></Link>
              <Link to='/category?n='><Categories>Link 3</Categories></Link>
            </CatalogInner>
          </Catalog>
          <Input
            type="text"
            placeholder="I`m looking for ..."
            onChange={inputOnChangeHandler}
            onKeyPress={inputOnKeyPressHandler}
            value={inputState}
          />
          <Favorite>♥</Favorite>
          <Cart>Cart</Cart>
        </Wrapper>
      </Container>
  )
}

export default Header