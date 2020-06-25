import styled from "styled-components";

export const CommentsContainer=styled.div`
margin-top: 30px;
width:100%;



`
export const ListCommentsItem=styled.li`
list-style-type: none;
padding:10px 8px;
height:90px;
border:1px solid grey;
border-radius:5px; 
  background:RGBA(255,255,255,1);
  -webkit-box-shadow:  0px 0px 15px 0px rgba(0, 0, 0, .45);        
  box-shadow:  0px 0px 15px 0px rgba(0, 0, 0, .45);  

`
export const ListComments=styled.ul`
margin-top:20px;
`
export const TextArea=styled.textarea`
 background: rgba(255, 255, 255, 0.4); 
    width:100%;
    height: 120px;
    border:rgba(0,0,0,.3) 2px solid;
    box-sizing:border-box;
    -moz-border-radius: 3px;
    font-size:18px;
    font-family: 'Open Sans', sans-serif;
    -webkit-border-radius: 3px;
    border-radius: 3px; 
    display:block;
    padding:10px;
    margin-bottom:30px;
    overflow:hidden;
`
export const Modal=styled.div`
  display: none; 
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
`
export const ModalContent=styled.div`
 background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  border-radius:10px;
`
export const ButtonAdd=styled.button`
font-size: 1.2em;
  border: 2px solid #f64c2b;
  border-radius: 5px;
  box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset, 0.1em 0.1em 0.2em #800;
  background: linear-gradient(#fb9575, #f45a38 48%, #ea1502 52%, #f02f17);
  margin:20px 0 0 20px;
`
export const ExitModal=styled.span`
float:right;
cursor:pointer;
font-size:1.5em
`
export const Form = styled.form`
margin:0 auto;
 
`
export const TextBox=styled.input`
height:50px;
  width:100%;
  border-radius:3px;
  border:rgba(0,0,0,.3) 2px solid;
  box-sizing:border-box;
  font-family: 'Open Sans', sans-serif;
  font-size:18px; 
  padding:10px;
  margin-bottom:30px;
  `
export const Submit=styled.button`
 height:50px;
  width:100%;
  border-radius:3px;
  border:rgba(0,0,0,.3) 0px solid;
  box-sizing:border-box;
  padding:10px;
  background:#90c843;
  color:#FFF;
  font-family: 'Open Sans', sans-serif;  
  font-weight:400;
  font-size: 16pt;
  transition:background .4s;
  cursor:pointer;
`
export const ImgProfile=styled.img`
height:50px;
width:60px;
float:left;
margin:8px;
`
export const CommentsTitle=styled.h2`
padding: 30px;
`

