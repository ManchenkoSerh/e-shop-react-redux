import styled from "styled-components";

export const CommentsContainer=styled.div`
margin-top: 30px;
width:100%;
height:300px;


`
export const ListCommentsItem=styled.li`
list-style-type: none;
margin-top:15px;
padding-top:8px;

`
export const ListComments=styled.ul`
overflow-y:scroll;
height:150px;
margin-top:10px;
`
export const TextArea=styled.textarea`
width:200px;
height:50px;
margin-top:10px;
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

