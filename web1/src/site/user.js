import React, { useEffect, useState } from "react";
import { ProgressBar, Navbar, Nav, Container, Toast } from "react-bootstrap";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../fonts/font.css";
let Outcontainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffebcd;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "HarryFont1";
`;
let Header = styled.div`
  padding: 100px;
  height: 10%;
`;
let Text1 = styled.div`
  width: 800px;
  height: 50%;
`;
let Text2 = styled.div`
  height: 40%;
`;
let Proload = styled.div``;
let Imgload = styled.div`
  padding: 15px;
`;
let Span2 = styled.div`
  display: flex;
  justify-content: space-around;
`;
let Span1 = styled.div``;
let stage = 1;
let buttonshow = 0;

function User(props) {
  let { id } = useParams();
  let email = id;
  let [progress, progress변경] = useState(0);
  let [progress1, progress1변경] = useState(0);
  let [fontname, fontname변경] = useState("");

  let ttfcontinue = () => {
    buttonshow = 0;
    axios.post("http://localhost:8080/level3").then((res) => {
      progress1변경(100);
    });
  };
  let toas = () => {
    buttonshow = 0;
    window.location.replace("/as");
  };
  useEffect(() => {
    axios.post("http://localhost:8080/level" + String(stage)).then((res) => {
      if (stage === 2) {
        fontname변경(res.data.fontName);
      }
      progress1변경(progress1 + 34);
      if (progress < 33) {
        progress변경(progress + 34);
        buttonshow = 1;
        stage += 1;
      }
    });
  }, [progress]);
  let url = "/download/" + email;

  return (
    <Outcontainer>
      <Header>
        <h1>{id}'s font is generating...</h1>
      </Header>
      <Text1>
        <Proload>
          <ProgressBar now={progress1} />
        </Proload>
        <Span2>
          <Span1>
            <b>png -&gt; ttf</b>
          </Span1>
          <Span1>
            <b>font model running...</b>
          </Span1>
          <Span1>
            <b>png -&gt; ttf</b>
          </Span1>
        </Span2>
        <Imgload>
          {progress1 >= 67 ? (
            <div>
              <img src={`/${fontname}1.png`} />
              <img src={`/${fontname}2.png`} />
              <img src={`/${fontname}3.png`} />
              <img src={`/${fontname}4.png`} />
              <img src={`/${fontname}5.png`} />
              <img src={`/${fontname}6.png`} />
              <img src={`/${fontname}7.png`} />
              <img src={`/${fontname}8.png`} />
              <img src={`/${fontname}9.png`} />
              <img src={`/${fontname}10.png`} />
              <img src={`/${fontname}11.png`} />
              <img src={`/${fontname}12.png`} />
            </div>
          ) : null}
          {buttonshow === 1 ? (
            <div>
              <h3>Do you want to give AS?</h3>
              <button onClick={toas}>YES</button>
              <button onClick={ttfcontinue}>NO</button>
            </div>
          ) : null}
        </Imgload>
      </Text1>
      <Text2>
        {progress1 >= 100 ? (
          <div>
            <Link to={url}>
              <h2>Click your download link</h2>
            </Link>
          </div>
        ) : null}
      </Text2>
    </Outcontainer>
  );
}

export default User;