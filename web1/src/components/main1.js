import React from "react";
import styled from "styled-components";
import Middle from "./middle";
import Side from "./side";

const MainDiv = styled.div``;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
`;

const Bain = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <Middle />
        <Side />
      </ContentDiv>
    </MainDiv>
  );
};

export default Bain;