import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
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
  height: 50%;
`;
function Down() {
  let { id } = useParams();
  let [user_ttf, user_ttf변경] = useState("");
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
      user_ttf변경("/" + result.data.fontName + ".ttf");
    });
  return (
    <Outcontainer>
      <Header>
        <h1>Thank you for using</h1>
      </Header>
      <Text1>
        <h2>
          <Link to={user_ttf} target="_blank" download>
            <h1>Download Link</h1>
          </Link>
        </h2>
      </Text1>
    </Outcontainer>
  );
}
export default Down;