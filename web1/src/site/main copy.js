import React from "react";
import styled from "styled-components";
import Middle from "./middle";
import Side from "./side";
import "../fonts/font.css";

const MainDiv = styled.div``;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(to right, #ffebcd, #ffffff);
  font-family: "Cafe24SsurroundAir";
`;
function Cain() {
  return (
    <MainDiv>
      <ContentDiv>
        <Middle></Middle>
        <Side />
      </ContentDiv>
    </MainDiv>
  );
}
export default Cain;