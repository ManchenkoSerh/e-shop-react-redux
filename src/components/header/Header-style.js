import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: #e95d2a;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  min-width: 305px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Catalog = styled.div`
  position: relative;
  display: inline-block;
`

const CatalogButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #3e8e41;
  }
`

const CatalogInner = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  ${Catalog}:hover & {
    display: block;
  }
 `

const Input = styled.input`
  color: white;
  font-size: 16px;
  padding: 10px;
  margin: 10px;
  background: rgba(255,255,255,.3);
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: white;
  }
  :focus {
    outline: none;
  }
`;

const Categories = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`

const Favorite = styled.button`
  background-color: #11ffee00;
  color: white;
  padding: 10px 20px;
  font-size: 1.5em;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    color: #3e8e41;
  }
`

const Cart = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #3e8e41;
  }
`

export {Input, Wrapper, CatalogInner, Catalog, Container, CatalogButton, Categories, Favorite, Cart}