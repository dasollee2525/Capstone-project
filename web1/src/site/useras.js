import React, { useEffect, useState } from "react";
import { ProgressBar, Navbar, Nav, Container } from "react-bootstrap";
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
let Span2 = styled.div`
  display: flex;
  justify-content: space-around;
`;
let Span1 = styled.div``;
let stage = 1;

function Useras(props) {
  let { id } = useParams();
  let email = id;
  let [progress, progress변경] = useState(0);

  useEffect(() => {
    axios.post("http://localhost:8080/level" + String(stage)).then((res) => {
      if (progress < 100) {
        progress변경(progress + 34);
        progress += 34;
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
          <ProgressBar now={progress} />
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
      </Text1>
      <Text2>
        {progress >= 100 ? (
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

export default Useras;