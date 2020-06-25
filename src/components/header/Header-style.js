import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: #e95d2a;
  min-height: 6vh;
  position:fix;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  min-width: 305px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
`;

const Catalog = styled.div`
  position: relative;
  display: inline-block;
  width: 15%
`

const CatalogButton = styled.button`
  background-color: #0c061a;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  outline: none;
  cursor: pointer;
  height: 100%;
  width: 100%
`

const MainButton = styled.div`
  margin: 5px auto;
`

const CatalogInner = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  ${Catalog}:hover & {
    display: block;
  }
 `

const Input = styled.input`
  color: white;
  font-size: 16px;
  padding: 15px;
  margin: 10px 20px;
  background: rgba(255,255,255,.3);
  border: none;
  border-radius: 3px;
  width: 50%;
  ::placeholder {
    color: white;
  }
  :focus {
    outline: none;
  }
`;

const Categories = styled.p`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`

const Favorite = styled.button`
  background-color: #11ffee00;
  color: white;
  padding: 0 10px;
  font-size: 1.5em;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    color: #3e8e41;
  }
`

const Cart = styled.button`
  margin: 15px 20px;
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
const  ChangeLanguage=styled.a`
font-size:1.4em;
color:white;
padding:4vh 1vh;
cursor:pointer;
&&:hover{
text-decoration:underline;
}
`


export {Input, Wrapper, CatalogInner, Catalog, Container, CatalogButton, Categories, Favorite, Cart,ChangeLanguage, MainButton}
