import React from "react";
import axios from "axios";
import {
  InputGroup,
  FormControl,
  Nav,
  Navbar,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import styled from "styled-components";
import MakeButton from "../components/button";
import GetInfo from "./getinfo";
import Info from "./info";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
let Information = styled.div`
  height: 30%;
  width: 60%;
`;
let style = {
  a: {
    width: "20%",
  },
  b: {
    width: "200px",
    cursor: "pointer",
    margin: "20px",
  },
};
let Submit = styled.div`
  padding: ${(props) => props.paddingsize};
`;
function Check(props) {
  let [fontname, fontname변경] = useState("");
  let [email, email변경] = useState("");
  let [user_id, user_id변경] = useState(0);
  let [check, check변경] = useState(false);
  const handleclick = (e) => {
    axios
      .post(
        "http://localhost:8080/check",
        {
          fontname,
          email,
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((result) => {
        if (result.data != "0") {
          window.location.replace("/user/" + email);
        } else {
          check변경(true);
        }
      });
  };
  return (
    <div>
      <Information>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg" style={style.a}>
            FONT NAME
          </InputGroup.Text>
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="font name"
            onChange={(e) => {
              fontname변경(e.target.value);
            }}
          />
        </InputGroup>
        <br></br>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg" style={style.a}>
            E-mail
          </InputGroup.Text>
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="E-mail Address"
            onChange={(e) => {
              email변경(e.target.value);
            }}
          />
        </InputGroup>
      </Information>
      <Submit paddingsize={"0 0 0 300px"}>
        <Button
          as="input"
          type="submit"
          value="Submit"
          onClick={handleclick}
          style={style.b}
        />
      </Submit>
      {check === true ? <h3>다시 입력해주세요</h3> : null}
    </div>
  );
}
export default Check;