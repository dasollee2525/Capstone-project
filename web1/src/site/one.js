import React from "react";
import {
  Nav,
  Navbar,
  Container,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import "../fonts/font.css";

let Outcontainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffebcd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "HarryFont1";
`;

let style = {
  a: {
    width: "150px",
  },
  b: {
    width: "200px",
    cursor: "pointer",
    margin: "20px",
  },
};

let check = 1;
let Header = styled.div`
  padding: 100px;
  height: 30%;
`;
let Text1 = styled.div`
  height: 40%;
`;
let Text2 = styled.div`
  height: 30%;
`;
let Fileload = styled.div`
  padding: 15px;
`;
function Generateone() {
  let [fontname, fontname변경] = useState("");
  let [email, email변경] = useState("");
  let [img1, img1변경] = useState(null);
  let [file, file변경] = useState(0);
  const handleclick = (e) => {
    if (img1) {
      const fd = new FormData();
      fd.append("file", img1);
      axios.post(
        "http://localhost:8080/text",
        {
          fileName: email,
          fontName: fontname,
          email,
          check,
          as: "0",
          font_part: [0, 0, 0],
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      axios
        .post("http://localhost:8080/button", fd, {})
        .then(window.location.replace("/user/" + email));
    } else {
      file변경(1);
    }
  };
  return (
    <Outcontainer>
      <Header>
        <h1>Submit your template</h1>
      </Header>
      <Text1>
        <Fileload>
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
        </Fileload>
        <Fileload>
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
        </Fileload>
        <h5>Upload File and Choose the gan of consonant respectively * jpeg</h5>
        <Fileload>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Control
              type="file"
              size="lg"
              onChange={(e) => {
                img1변경(e.target.files[0]);
              }}
            />
          </Form.Group>
        </Fileload>
      </Text1>
      <Text2>
        <Button
          as="input"
          type="submit"
          value="Submit"
          onClick={handleclick}
          style={style.b}
        />

        {file === 1 ? (
          <div>
            <h3>Upload your file before submit.</h3>
          </div>
        ) : null}
      </Text2>
    </Outcontainer>
  );
}
export default Generateone;