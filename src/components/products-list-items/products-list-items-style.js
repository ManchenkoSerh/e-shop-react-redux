import styled from 'styled-components';

export const Item = styled.div`
    border:1px solid silver;
    border-radius:5px;
    width:30%;
`
export const Img=styled.img`
    margin:15px 25%
`
export const Button=styled.button`
    font-size:1.2em;
    border: 2px solid #F64C2B;
    border-radius: 5px;
    box-shadow: 0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em #800;
    background: linear-gradient(#FB9575, #F45A38 48%, #EA1502 52%, #F02F17);
    margin-bottom:8px;
`
export const ButtonInfo=styled(Button)`
    border: 2px solid #0000FF;
    box-shadow: 0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em #0000CD;
    background: linear-gradient(#0000CD, #00008B 48%, #000080 52%, #191970);
    color:white; 
`

// export const Button=styled.button
//     `top: .1em;
//   left: .1em;
//   box-shadow: 0 0 0 60px rgba(0,0,0,.05) inset;
// `
