import React from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import Formdata from "form-data";
import axios from "axios";
import { Link } from "react-router-dom";

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
let Information = styled.div`
  height: 30%;
  width: 60%;
`;
let Upload = styled.div`
  height: 40%;
  width: 100%;
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
let Spantext = styled.span`
  font-size: ${(props) => props.fontsize};
  display: inline-block;
  margin: ${(props) => props.marginsize};
`;
let user = 0;
function Info() {
  let [fontname, fontname변경] = useState("");
  let [email, email변경] = useState("");
  let [check, check변경] = useState(0);
  let [img1, img1변경] = useState(null);
  let [img2, img2변경] = useState(null);
  let [img3, img3변경] = useState(null);
  let [user_id, user_id변경] = useState("1");

  let [font_part, font_part변경] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const handleclick = (e) => {
    const fd = new FormData();
    if (check == 1) {
      fd.append("file", img1);
    } else if (check == 2) {
      fd.append("file", img1);
      fd.append("file", img2);
    } else if (check == 3) {
      fd.append("file", img1);
      fd.append("file", img2);
      fd.append("file", img3);
    }

    axios.post(
      "http://localhost:8080/text",
      {
        fileName: email,
        fontName: fontname,
        email,
        check,
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
      .then((req, res) => {
        user = res.data;
      })
      .then(window.location.replace("/user/" + email));
  };
  return (
    <div>
      {" "}
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
      <Count>
        <Spantext fontsize={"20px"}>
          The number of handwriting (maximum 3)
        </Spantext>
        <div>
          <label>
            <Radio
              type="checkbox"
              name="number"
              marginsize={"20px"}
              onClick={() => {
                check변경(1);
              }}
            />
            1
          </label>
          &nbsp;&nbsp;
          <label>
            <Radio
              type="checkbox"
              name="number"
              marginsize={"20px"}
              onClick={() => {
                check변경(2);
              }}
            />{" "}
            2
          </label>
          &nbsp;&nbsp;
          <label>
            <Radio
              type="checkbox"
              name="number"
              marginsize={"20px"}
              onClick={() => {
                check변경(3);
              }}
            />{" "}
            3
          </label>
        </div>
      </Count>
      <Upload>
        <div>
          <Spantext fontsize={"20px"} margin={"0 100px 0 0"}>
            Upload File and Choose the gan of consonant respectively
          </Spantext>
          <Spantext fontsize={"20px"}>* jpg 파일로 제출해주세요</Spantext>
        </div>
        <div>
          <Fileform>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control
                type="file"
                size="lg"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  img1변경(e.target.files[0]);
                }}
              />
            </Form.Group>
            <div>
              <label>
                <Radio
                  type="checkbox"
                  name="number"
                  marginsize={"20px"}
                  onClick={() => {
                    let temp_lst = [...font_part];
                    temp_lst[0][0] = "initial";
                    font_part변경(temp_lst);
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
                    let temp_lst = [...font_part];
                    temp_lst[0][1] = "medial";
                    font_part변경(temp_lst);
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
                    let temp_lst = [...font_part];
                    temp_lst[0][2] = "final";
                    font_part변경(temp_lst);
                  }}
                />{" "}
                final
              </label>
            </div>
          </Fileform>
          <Fileform>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control
                type="file"
                size="lg"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  img2변경(e.target.files[0]);
                }}
              />
            </Form.Group>
            <div>
              <label>
                <Radio
                  type="checkbox"
                  name="number"
                  marginsize={"20px"}
                  onClick={() => {
                    let temp_lst = [...font_part];
                    temp_lst[1][0] = "initial";
                    font_part변경(temp_lst);
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
                    let temp_lst = [...font_part];
                    temp_lst[1][1] = "medial";
                    font_part변경(temp_lst);
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
                    let temp_lst = [...font_part];
                    temp_lst[1][2] = "final";
                    font_part변경(temp_lst);
                  }}
                />{" "}
                final
              </label>
            </div>
          </Fileform>
          <Fileform>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control
                type="file"
                size="lg"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  img3변경(e.target.files[0]);
                }}
              />
            </Form.Group>
            <div>
              <label>
                <Radio
                  type="checkbox"
                  name="number"
                  marginsize={"20px"}
                  onClick={() => {
                    let temp_lst = [...font_part];
                    temp_lst[2][0] = "initial";
                    font_part변경(temp_lst);
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
                    let temp_lst = [...font_part];
                    temp_lst[2][1] = "medial";
                    font_part변경(temp_lst);
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
                    let temp_lst = [...font_part];
                    temp_lst[2][2] = "final";
                    font_part변경(temp_lst);
                  }}
                />{" "}
                final
              </label>
            </div>
          </Fileform>
          <Submit paddingsize={"0 0 0 300px"}>
            <Button
              as="input"
              type="submit"
              value="Submit"
              onClick={handleclick}
              style={style.b}
            />
          </Submit>
        </div>
      </Upload>
    </div>
  );
}
export default Info;