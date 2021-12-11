import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import "../fonts/font.css";
const SideDiv = styled.div`
  width: 10%;
  position: fixed;
  right: 5rem;
  margin-top: 70px;
  div {
    display: flex;
    flex-direction: column;
  }
  font-family: "HarryFont1";
`;

const Side = () => {
  return (
    <SideDiv>
      <div>
        <Link to="1" spy={true} smooth={true}>
          <span>Introduction</span>
        </Link>
        <Link to="2" spy={true} smooth={true}>
          <span>How to use</span>
        </Link>
        <Link to="3" spy={true} smooth={true}>
          <span>Download</span>
        </Link>
      </div>
    </SideDiv>
  );
};

export default Side;