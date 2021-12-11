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
let Outcontainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffebcd;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "HarryFont1";
  justify-content: center;
`;

let Intro = styled.div`
  heigth: 20%;
  width: 50%;
  display: flex;
  align-items: center;
`;

let Spantext = styled.span`
  font-size: ${(props) => props.fontsize};
  display: inline-block;
  margin: ${(props) => props.marginsize};
`;
let Textdiv = styled.div`
  padding: ${(props) => props.paddingsize};
  height: 90%;
`;

let Information = styled.div`
  height: 30%;
  width: 60%;
`;

let Count = styled.div`
  width: 100%;
  height: 10%;
`;
let Fileform = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
let Radio = styled.input`
  margin: ${(props) => props.marginsize};
`;
let Submit = styled.div`
  padding: ${(props) => props.paddingsize};
`;
let Header = styled.div`
  padding: 100px;
  height: 25%;
`;
let Text1 = styled.div`
  height: 55%;
`;
let Text2 = styled.div`
  height: 20%;
`;
let Fileload = styled.div`
  padding: 15px;
`;
let Upload = styled.div`
  display: flex;
`;
let Check = styled.div`
  display: flex;
  align-items: center;
`;
let Consonant = styled.div``;
let user = 0;
function Form1() {
  let [fontname, fontname변경] = useState("");
  let [email, email변경] = useState("");
  let [check, check변경] = useState("0");
  let [img1, img1변경] = useState(null);
  let [img2, img2변경] = useState(null);
  let [img3, img3변경] = useState(null);
  let [font_part, font_part변경] = useState(["", "", ""]);
  let [file, file변경] = useState(0);
  const handleclick = (e) => {
    const fd = new FormData();
    if (check === "2" && img1 && img2 && !img3) {
      fd.append("file", img1);
      fd.append("file", img2);

      axios.post(
        "http://localhost:8080/text",
        {
          fileName: email,
          fontName: fontname,
          email,
          check,
          as: "0",
          font_part,
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
        .then(window.location.replace("/useras/" + email));
    } else if (check === "3" && img1 && img2 && img3) {
      fd.append("file", img1);
      fd.append("file", img2);
      fd.append("file", img3);

      axios.post(
        "http://localhost:8080/text",
        {
          fileName: email,
          fontName: fontname,
          email,
          check,
          as: "0",
          font_part,
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
        .then(window.location.replace("/useras/" + email));
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
        <Check>
          <h4>The number of handwriting(2 or 3)</h4>
          <label>
            <Radio
              type="checkbox"
              name="number"
              marginsize={"20px"}
              onClick={() => {
                check변경("2");
              }}
            />{" "}
            <b>2</b>
          </label>
          &nbsp;&nbsp;
          <label>
            <Radio
              type="checkbox"
              name="number"
              marginsize={"20px"}
              onClick={() => {
                check변경("3");
              }}
            />{" "}
            <b> 3</b>
          </label>
        </Check>
        <h5>Upload File and Choose the gan of consonant respectively * jpeg</h5>
        <Upload>
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
          <Consonant>
            <label>
              <Radio
                type="checkbox"
                name="number"
                marginsize={"20px"}
                onClick={() => {
                  let temp = [...font_part];
                  temp[0] = 0;
                  font_part변경(temp);
                }}
              />
              initial
            </label>
            &nbsp;&nbsp;
            <label>
              <Radio
                type="checkbox"
                name="number"
                marginsize={"20px"}
                onClick={() => {
                  let temp = [...font_part];
                  temp[1] = 0;
                  font_part변경(temp);
                }}
              />{" "}
              medial
            </label>
            &nbsp;&nbsp;
            <label>
              <Radio
                type="checkbox"
                name="number"
                marginsize={"20px"}
                onClick={() => {
                  let temp = [...font_part];
                  temp[2] = 0;
                  font_part변경(temp);
                }}
              />{" "}
              final
            </label>
          </Consonant>
        </Upload>
        <Upload>
          <Fileload>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control
                type="file"
                size="lg"
                onChange={(e) => {
                  img2변경(e.target.files[0]);
                }}
              />
            </Form.Group>
          </Fileload>
          <Consonant>
            <label>
              <Radio
                type="checkbox"
                name="number"
                marginsize={"20px"}
                onClick={() => {
                  let temp = [...font_part];
                  temp[0] = 1;
                  font_part변경(temp);
                }}
              />
              initial
            </label>
            &nbsp;&nbsp;
            <label>
              <Radio
                type="checkbox"
                name="number"
                marginsize={"20px"}
                onClick={() => {
                  let temp = [...font_part];
                  temp[1] = 1;
                  font_part변경(temp);
                }}
              />{" "}
              medial
            </label>
            &nbsp;&nbsp;
            <label>
              <Radio
                type="checkbox"
                name="number"
                marginsize={"20px"}
                onClick={() => {
                  let temp = [...font_part];
                  temp[2] = 1;
                  font_part변경(temp);
                }}
              />{" "}
              final
            </label>
          </Consonant>
        </Upload>
        <Upload>
          <Fileload>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control
                type="file"
                size="lg"
                onChange={(e) => {
                  img3변경(e.target.files[0]);
                }}
              />
            </Form.Group>
          </Fileload>
          <Consonant>
            <label>
              <Radio
                type="checkbox"
                name="number"
                marginsize={"20px"}
                onClick={() => {
                  let temp = [...font_part];
                  temp[0] = 2;
                  font_part변경(temp);
                }}
              />
              initial
            </label>
            &nbsp;&nbsp;
            <label>
              <Radio
                type="checkbox"
                name="number"
                marginsize={"20px"}
                onClick={() => {
                  let temp = [...font_part];
                  temp[1] = 2;
                  font_part변경(temp);
                }}
              />{" "}
              medial
            </label>
            &nbsp;&nbsp;
            <label>
              <Radio
                type="checkbox"
                name="number"
                marginsize={"20px"}
                onClick={() => {
                  let temp = [...font_part];
                  temp[2] = 2;
                  font_part변경(temp);
                }}
              />{" "}
              final
            </label>
          </Consonant>
        </Upload>
      </Text1>
      <Text2>
        <Button
          as="input"
          type="submit"
          value="Submit"
          onClick={handleclick}
          style={style.b}
        />

        {file === 1 ? <div>파일 형식을 맞춰주세요</div> : null}
      </Text2>
    </Outcontainer>
  );
}
export default Form1;