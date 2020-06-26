import styled from "styled-components";

export const Characteristic = styled.div`
  margin: 30px 0 0 5%;
  width: 100%;
`;
export const CharacteristicItem = styled.li`
  list-style-type: none;
  font-size: 1.3em;
  display: block;
  letter-spacing: -1ex;
  margin: 5px 0;
`;
export const ListCharacteristics = styled.ul`
  margin-top: 10px;
  display: block;
  margin: 0;
  padding: 0;
`;
export const FeatureLeft = styled.div`
  margin-right: -50%;
  width: 49%;
  vertical-align: top;
  overflow: hidden;
  display: inline-block;
  right: 0;
  letter-spacing: normal;
  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    margin: 0 -99% 0 3px;
    vertical-align: baseline;
    border-bottom: 1px dashed #888;
  }
`;
export const FeatureRight = styled.div`
display: inline-block;
letter-spacing: normal;
padding-left: 3px;
margin-left: 50%;
width: 50%;
vertical-align: bottom;

}`;
