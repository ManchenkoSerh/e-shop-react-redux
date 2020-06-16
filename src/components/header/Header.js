import React from "react";
import SearchBar from "../search-bar/SearchBar";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #e95d2a;
`;

const Header = () => {
  return (
    <div>
      <Wrapper>
        <SearchBar />
      </Wrapper>
    </div>
  )
}

export default Header