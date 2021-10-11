import React from "react";
import styled from "styled-components";

let Button = styled.button`
  background-color: white;
  color: black;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
`;
function MakeButton(props) {
  return (
    <div>
      <Button>{props.text}</Button>
    </div>
  );
}
export default MakeButton;
