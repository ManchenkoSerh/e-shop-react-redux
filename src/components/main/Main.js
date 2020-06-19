import React from "react";
import Routers from "../../helpers/routers/Routers";
import Header from "../header/Header";
import {MainContainer} from "./main-container-style";

const Main = () => {
    return(
        <MainContainer>
          <Header />
          <Routers/>
        </MainContainer>
    );
}
export default Main;
