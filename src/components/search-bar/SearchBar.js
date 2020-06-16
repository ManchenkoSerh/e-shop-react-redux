import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  margin: 10px;
  background: rgba(255,255,255,.3);
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: white;
  }
`;

const SearchBar = () => {
  return (
    <div>
      <Input type="text" placeholder="Я ищу" />
    </div>
  )
}

export default SearchBar