import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import MakeButton from "../components/button";
import { Nav, Navbar } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";
import { useParams, Link } from "react-router-dom";
import "../fonts/font.css";
let style = {
  a: {
    width: "500px",
    height: "50px",
    "border-radius": "30px",
    "background-color": "#FFFACD",
  },
  b: {
    width: "200px",
    cursor: "pointer",
    margin: "20px",
  },
};
let Listtext = styled.li`
  padding: ${(props) => props.paddingsize};
  font-size: ${(props) => props.fontsize};
`;
let Spantext = styled.span`
  font-size: ${(props) => props.fontsize};
  display: inline-block;
  margin: ${(props) => props.margin};
`;
let Header = styled.div`
  padding: 100px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

let Input = styled.div`
  margin: 100px;
  font-family: "seongbin";
`;
let Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
let Text1 = styled.span`
  display: flex;
  margin: 50px;
  justify-content: space-around;
  align-items: center;
`;
let Text2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
let Text3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 150px;
`;
let Text4 = styled.span`
  display: flex;
  flex-direction: column;
`;
let Text5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
let Text6 = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
let Input1 = styled.input`
  font-family: "HarryFont";
  width: 500px;
  height: 100px;
  display: inline;
  font-size: 50px;
`;
const MiddleDiv = styled.div`
  div {
    height: 1024px;
  }
  font-family: "HarryFont1";
`;

const Middle = () => {
  const downloadpdf = () => {
    window.location.href = "/filledTemplate.pdf";
  };
  return (
    <MiddleDiv>
      <div id="1">
        <Text3>
          <h1>Gandan FontMaker</h1>
          <span>
            <ol>
              <Listtext paddingsize={"50px"} fontsize={"20px"}>
                Do you want to make your own font? <br />
                -&gt;<b> Use Gandan FontMaker.</b>
              </Listtext>
              <Listtext paddingsize={"50px"} fontsize={"20px"}>
                Get your handwriting and make your <b>own font</b> through
                Deeplearning.
              </Listtext>
              <Listtext paddingsize={"50px"} fontsize={"20px"}>
                <h4>Write what your want</h4>
                <Input1 file="text"></Input1>
              </Listtext>
            </ol>
          </span>
        </Text3>
      </div>
      <div id="2">
        <Text>
          <h1>How to use</h1>
          <span>
            <ol>
              <Listtext paddingsize={"20px"} fontsize={"20px"}>
                Download the form below.
              </Listtext>
              <Listtext paddingsize={"20px"} fontsize={"20px"}>
                Fill it out according to the form and upload it.
              </Listtext>
              <Listtext paddingsize={"20px"} fontsize={"20px"}>
                If you don't like the result, A/S is also possible!
              </Listtext>
            </ol>
          </span>
        </Text>
      </div>
      <div id="3">
        <Text2>
          <h2>DownLoad Template</h2>
          <Text5>
            <button onClick={downloadpdf} style={style.a}>
              Template.pdf
            </button>
            <br />
            <Link to="/one">
              <button style={style.a}>
                If you are <b>One</b> go to this
              </button>
            </Link>
            <br />
            <Link to="/multi">
              <button style={style.a}>
                If you are <b>two or three</b> go to this
              </button>
            </Link>
          </Text5>
        </Text2>
      </div>
    </MiddleDiv>
  );
};

export default Middle;