import React, { Component } from "react";
import { ToTop } from "../products-info/products-info-style";

export default class ToUp extends Component {
  componentDidMount() {
    const top = document.querySelector(".top");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        top.style.display = "block";
      } else {
        top.style.display = "none";
      }
    });
  }
  toTop = () => {
    const top = document.querySelector(".top"); //let scroll=document.querySelector(".scroll");
    top.style.display = "none";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <ToTop className="top" onClick={this.toTop}>
        Top
      </ToTop>
    );
  }
}
