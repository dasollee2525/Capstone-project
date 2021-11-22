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
import { Link, useHistory, useParams } from "react-router-dom";
import DownloadLink from "react-download-link";
import axios from "axios";

function Down() {
  let { id } = useParams();
  let [user_ttf, user_ttf변경] = useState("");
  let [fontname, fontname변경] = useState("");
  axios
    .post(
      "http://localhost:8080/download",
      { id },
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((result) => {
      user_ttf변경("/" + result.data.user_fontname + ".ttf");
      fontname변경(result.data.user_fontname);
      console.log(result);
    });
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/form1">Font-Generation</Nav.Link>
            <Nav.Link href="/form2">Font-AS</Nav.Link>
            <Nav.Link href="/request">Q&A</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>{id}님 밑의 링크를 다운로드 받으세요</h1>
      <h2>
        <Link to={user_ttf} target="_blank" download>
          {fontname}
        </Link>
      </h2>
    </div>
  );
}
export default Down;