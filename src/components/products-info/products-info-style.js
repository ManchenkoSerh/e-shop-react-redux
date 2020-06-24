import styled from 'styled-components';
import React from "react";
export const ProductInfoContainer=styled.div`
width:90%;
margin:10px auto;
`
export const Img=styled.img`
width:300px;
height:320px;
margin:5px 10px 0 10px;
`
export const ImgInfoToProduct=styled.div`
display:flex;
`
export const ListImg=styled.ul`
display:flex-column;
list-style-type: none;
width:68px;
margin: 40px 20px 0 20px
`
export const ListItemImg=styled.img`
justify-content:space-around;
width:80px;
height:80px
`
export const GeneralInfoToProduct=styled.div`
float:right;
margin:60px 25% 0 0;
`
export const Button=styled.button`
  font-size: 1.2em;
  border: 2px solid #f64c2b;
  border-radius: 5px;
  box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset, 0.1em 0.1em 0.2em #800;
  background: linear-gradient(#fb9575, #f45a38 48%, #ea1502 52%, #f02f17);
  margin:20px 0 0 20px;
`
export const ProductPrice= styled.span`
padding-top:20px;
margin-top:20px;
font-size:1.5em
`
export const  VideoInfo =styled.div`
padding:40px auto;
`
export const ToTop=styled.button`
 display: none;
  background-color: #FF9800;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color;
  opacity:0.4;
  color:white;
`
