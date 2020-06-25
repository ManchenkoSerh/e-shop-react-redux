import styled from "styled-components";
export const TableItem = styled.div`
  display: flex;
  width: 80%;
  margin: 10px auto;
  padding: 20px 30px;
  height: 120px;
 position:relative;
 text-align:right;
`;
export const CartName = styled.span`
  font-size: 1.3em;
  padding: 10px;
`;
export const InfoCart = styled.div``;
export const ProductPrice = styled.div`
  margin: 20px 10px;
  float:left;
`;
export const ImgProduct=styled.img`
width:100px;
height:100px;
`
export const BtnIncrement = styled.button`
   width: 30px;
  height: 30px;
  margin:0 5px;
  background-color: #E1E8EE;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;
export const Quantity=styled.div`
padding-top: 20px;
  margin:0 60px;
`
export const TotalSum = styled.span`
   width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
  text-align:right;
  display:inline-block;
  
`;
export const BtnDelete=styled.button`
 width: 18px;
 border:none;
  height: 17px;
  margin-top:27px;
  
`
