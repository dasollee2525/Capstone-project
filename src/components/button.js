import React from "react";
import styled from "styled-components";

let Button = styled.button`
  background-color: ${(props) => props.backgroundcolor};
  color: black;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  width: ${(props) => props.size};
`;
function MakeButton(props) {
  return (
    <div>
      <Button size={props.size} backgroundcolor={props.backgroundcolor}>
        {props.text}
      </Button>
    </div>
  );
}
export default MakeButton;
