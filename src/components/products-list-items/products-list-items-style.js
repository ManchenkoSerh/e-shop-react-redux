import styled from "styled-components";

export const Img = styled.img`
  margin: 15px auto;
  height:180px;
  width:180px;
`;
export const Button = styled.button`
  font-size: 1.2em;
  border: 2px solid #f64c2b;
  border-radius: 5px;
  box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset, 0.1em 0.1em 0.2em #800;
  background: linear-gradient(#fb9575, #f45a38 48%, #ea1502 52%, #f02f17);
  margin-bottom: 8px;
  :hover{
  opacity:0.8;
  cursor:pointer;
  }
`;

export const Item = styled.div`
  padding: 15px;
  margin: 5px;
  border: 1px solid silver;
  border-radius: 5px;
  width: 22.2%;
`;
export const ButtonInfo = styled(Button)`
  border: 2px solid #0000ff;
  box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset, 0.1em 0.1em 0.2em #0000cd;
  background: linear-gradient(#0000cd, #00008b 48%, #000080 52%, #191970);
  color: white;
  display: none;
  ${Item}:hover & {
  display: inline-block;
  cursor:pointer;

  }
`;
// export const Button=styled.button
//     `top: .1em;
//   left: .1em;
//   box-shadow: 0 0 0 60px rgba(0,0,0,.05) inset;
// `
