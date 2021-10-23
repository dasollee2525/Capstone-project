import React from "react";
import styled from "styled-components";

let Button = styled.button`
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  padding: ${(props) => props.paddingsize};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${(props) => props.fontsize};
  margin: ${(props) => props.marginsize};
  cursor: pointer;
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.width};
`;
function MakeButton(props) {
  return (
    <div>
      <Button
        backgroundcolor={props.backgroundcolor}
        color={props.color}
        paddingsize={props.paddingsize}
        fontsize={props.fontsize}
        marginsize={props.marginsize}
        radius={props.radius}
        width={props.width}
      >
        {props.text}
      </Button>
    </div>
  );
}
export default MakeButton;
