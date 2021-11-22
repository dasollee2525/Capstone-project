import React, { useEffect, useState } from "react";
import {
  InputGroup,
  FormControl,
  Nav,
  Navbar,
  Container,
  Form,
  ProgressBar,
} from "react-bootstrap";
import styled from "styled-components";
import MakeButton from "../components/button";
import GetInfo from "./getinfo";
import Info from "./info";
import { useHistory, useParams, Route, Link } from "react-router-dom";
import DownloadLink from "react-download-link";
import axios from "axios";
import Down from "./download";
let level = 0;
let Span2 = styled.div`
  display: flex;
  justify-content: space-around;
`;
let Span1 = styled.div``;
function User(props) {
  let { id } = useParams();
  let email = id;
  let [url1, url1변경] = useState(1);
  let [progress, progress변경] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:8080/level" + String(url1)).then((res) => {
      if (progress < 100) {
        progress변경(progress + 20);
        url1변경(url1 + 1);
      }
    });
  }, [progress]);
  let down = function () {
    window.location.replace("/download/" + email);
  };
  let url = "/download/" + email;

  return (
    <div>
      <h1>{id}님 잠시만 기다려주세요</h1>
      <h2>{progress}</h2>
      {progress === 100 ? <Link to={url}>다운로드 페이지</Link> : null}
      <div>
        <ProgressBar now={progress} />
      </div>
      <Span2>
        <Span1>png변환</Span1>
        <Span1>svg변환</Span1>
        <Span1>ttf변환</Span1>
        <Span1>font생성중</Span1>
      </Span2>
    </div>
  );
}

export default User;