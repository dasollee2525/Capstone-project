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
  height: 30%;
`;
let Text1 = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30%;
`;
let Text2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30%;
`;
let Text3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
let Text4 = styled.span`
  padding: 20px;
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
let Outcontainer = styled.div`
  width: 100%;
  background-color: #ffebcd;
  display: flex;
  flex-direction: column;
  font-family: "HarryFont1";
`;
let Left = styled.div`
  width: 50%;
  padding: 200px;
`;
let Right = styled.div`
  width: 50%;
  padding: 20px;
  margin: 10px;
`;
let Hr = styled.hr`
  size: 20px;
  height: 10px;
  width: 100%;
  background-color: black;
`;
const Middle = () => {
  const downloadpdf = () => {
    window.location.href = "/filledTemplate.pdf";
  };
  return (
    <Outcontainer>
      <Text>
        <Left>
          <h1>Gandan FontMaker</h1>
        </Left>
        <Right>
          <span>
            <ol>
              <Listtext paddingsize={"10px"} fontsize={"30px"}>
                Do you want to make your own font? <br />
                -&gt;<b> Use Gandan FontMaker.</b>
              </Listtext>
              <Listtext paddingsize={"10px"} fontsize={"30px"}>
                Get your handwriting and make your <b>own font</b> through
                Deeplearning.
              </Listtext>
              <Listtext paddingsize={"10px"} fontsize={"30px"}>
                <h4>Write what your want</h4>
                <Input1 file="text"></Input1>
              </Listtext>
            </ol>
          </span>
        </Right>
      </Text>
      <Hr></Hr>
      <Text1>
        <Left>
          <h1>How to use</h1>
        </Left>
        <Right>
          <span>
            <ol>
              <Listtext paddingsize={"10px"} fontsize={"30px"}>
                Download the form below.
              </Listtext>
              <Listtext paddingsize={"10px"} fontsize={"30px"}>
                Fill it out according to the form and upload it.
              </Listtext>
              <Listtext paddingsize={"10px"} fontsize={"30px"}>
                If you don't like the result, A/S is also possible!
              </Listtext>
            </ol>
          </span>
        </Right>
      </Text1>
      <Hr></Hr>
      <Text2>
        <Left>
          <h2>DownLoad Template</h2>
        </Left>
        <Right>
          <Text3>
            <Text4>
              <button onClick={downloadpdf} style={style.a}>
                Template.pdf
              </button>
            </Text4>
            <Text4>
              <Link to="/one">
                <button style={style.a}>
                  If you are <b>One</b> go to this
                </button>
              </Link>
            </Text4>
            <Text4>
              <Link to="/multi">
                <button style={style.a}>
                  If you are <b>two or three</b> go to this
                </button>
              </Link>
            </Text4>
          </Text3>
        </Right>
      </Text2>
    </Outcontainer>
  );
};

export default Middle;