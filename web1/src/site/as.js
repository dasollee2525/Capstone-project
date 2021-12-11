import React from "react";
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
import { useState } from "react";
import axios from "axios";
import MakeButton from "../components/button";
import "../fonts/font.css";

import {
  initial1,
  initial_code,
  medial1,
  medial_code,
  final1,
  final_code,
} from "./word";
let style = {
  a: {
    width: "20%",
  },
  b: {
    width: "200px",
    cursor: "pointer",
    margin: "20px",
  },
  x: {
    width: "8%",
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

let Header = styled.div`
  padding: 100px;
  height: 30%;
`;
let Text1 = styled.div``;
let Text2 = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
let Fileload = styled.div`
  padding: 15px;
`;
let Consonant = styled.div`
  display: flex;
  width: 100%;
`;
let Text3 = styled.div`
  height: 30%;
`;
let Text4 = styled.div``;
let Text5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
`;
let Intro = styled.div`
  heigth: 10%;
  width: 100%;
  display: flex;
  align-items: center;
`;
let Information = styled.div`
  height: 30%;
  width: 60%;
`;
let Uploadpdf = styled.div`
  display: flex;
  align-items: center;
`;
let Upload = styled.div`
  height: 20%;
  display: inline;
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
let Conbutton = styled.button`
  background-color: white;
  width: 50px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
`;
let Submit = styled.div`
  padding: ${(props) => props.paddingsize};
  margin-right: 50px;
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
let Part2 = styled.div``;
function Form2() {
  axios
    .post("http://localhost:8080/font", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
    .then((result) => {
      email변경(result.data.email);
    });
  let [fontName, fontName변경] = useState("");
  let initial = Object.keys(initial1);
  let medial = Object.keys(medial1);
  let final = Object.keys(final1);
  let consonant_length = 10;
  let [pdf, pdf변경] = useState(0);
  let [initial_start, initial_start변경] = useState(0);
  let [medial_start, medial_start변경] = useState(0);
  let [final_start, final_start변경] = useState(0);
  let [as_part, as_part변경] = useState([[], [], []]);
  let [fontname, fontname변경] = useState("");
  let [email, email변경] = useState("");
  let [img1, img1변경] = useState(null);
  let [font_as, font_as변경] = useState([[], [], []]);
  let [font_as_code, font_as_code변경] = useState([[], [], []]);
  let result = [[], [], []];
  let result_code = [[], [], []];
  let [font_part, font_part변경] = useState(["", "", ""]);
  let len = 0;
  let a = true;
  let [file, file변경] = useState(0);
  const handleclick = (e) => {
    if (img1) {
      const fd = new FormData();
      fd.append("file", img1);

      axios.post(
        "http://localhost:8080/as1",
        {
          check: "1",
          font_part: [0, 0, 0],
          as: "1",
          as_part,
          font_as: result,
          font_as_code: result_code,
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      axios
        .post("http://localhost:8080/as2", fd, {})
        .then(window.location.replace("/useras/" + email));
    } else {
      file변경(1);
    }
  };
  const pdfclick = () => {
    pdf변경(1);
    let font_as_c = [[], [], []];
    font_as_c[0] = result[0];
    font_as_c[1] = result[1];
    font_as_c[2] = result[2];
    font_as변경(font_as_c);
    let font_as_code_c = [[], [], []];
    font_as_code_c[0] = result_code[0];
    font_as_code_c[1] = result_code[1];
    font_as_code_c[2] = result_code[2];
    font_as_code변경(font_as_code_c);
  };
  let user_initial = () => {
    for (let i = 0; i < as_part[0].length; i++) {
      result[0].push(initial1[as_part[0][i]]);
      result_code[0].push(initial_code[as_part[0][i]]);
    }
    return result[0];
  };
  let user_medial = () => {
    for (let i = 0; i < as_part[1].length; i++) {
      result[1].push(medial1[as_part[1][i]]);
      result_code[1].push(medial_code[as_part[1][i]]);
    }

    return result[1];
  };
  let user_final = () => {
    for (let i = 0; i < as_part[2].length; i++) {
      result[2].push(final1[as_part[2][i]]);
      result_code[2].push(final_code[as_part[2][i]]);
    }
    return result[2];
  };
  let initial_rendering = () => {
    let result = [];
    for (let i = initial_start; i < initial_start + consonant_length; i++) {
      result.push(
        <Conbutton
          key={i}
          onClick={(e) => {
            let as_part_c = [...as_part];
            if (as_part_c[0].includes(initial[i])) {
              as_part_c[0] = as_part_c[0].filter(
                (element) => element != initial[i]
              );
            } else {
              as_part_c[0].push(initial[i]);
            }
            as_part변경(as_part_c);
          }}
        >
          {initial[i]}
        </Conbutton>
      );
    }
    return result;
  };
  let middle_rendering = () => {
    let result = [];
    for (let i = medial_start; i < medial_start + consonant_length; i++) {
      result.push(
        <Conbutton
          key={i}
          onClick={() => {
            let as_part_c = [...as_part];
            if (as_part_c[1].includes(medial[i])) {
              as_part_c[1] = as_part_c[1].filter(
                (element) => element != medial[i]
              );
            } else {
              as_part_c[1].push(medial[i]);
            }
            as_part변경(as_part_c);
          }}
        >
          {medial[i]}
        </Conbutton>
      );
    }
    return result;
  };
  let final_rendering = () => {
    let result = [];
    for (let i = final_start; i < final_start + consonant_length; i++) {
      result.push(
        <Conbutton
          key={i}
          onClick={() => {
            let as_part_c = [...as_part];
            if (as_part_c[2].includes(final[i])) {
              as_part_c[2] = as_part_c[2].filter(
                (element) => element != final[i]
              );
            } else {
              as_part_c[2].push(final[i]);
            }
            as_part변경(as_part_c);
          }}
        >
          {final[i]}
        </Conbutton>
      );
    }
    return result;
  };
  const initial_leftmove = () => {
    if (initial_start > 0) {
      initial_start변경(initial_start - 1);
    }
  };

  const initial_rightmove = () => {
    if (initial_start < initial.length - consonant_length) {
      initial_start변경(initial_start + 1);
    }
  };

  const medial_leftmove = () => {
    if (medial_start > 0) {
      medial_start변경(medial_start - 1);
    }
  };

  const medial_rightmove = () => {
    if (medial_start < medial.length - consonant_length) {
      medial_start변경(medial_start + 1);
    }
  };
  const final_leftmove = () => {
    if (final_start > 0) {
      final_start변경(final_start - 1);
    }
  };

  const final_rightmove = () => {
    if (final_start < final.length - consonant_length) {
      final_start변경(final_start + 1);
    }
  };
  return (
    <Outcontainer>
      <Header>
        <h1>A/S Service</h1>
      </Header>
      Select the consonants that you want to revise
      <Text3>
        <Text4>
          <Consonant>
            <InputGroup.Text id="inputGroup-sizing-lg" style={style.x}>
              initial
            </InputGroup.Text>
            <Conbutton onClick={initial_leftmove}>&#171;</Conbutton>
            {initial_rendering()}
            <Conbutton onClick={initial_rightmove}>&#187;</Conbutton>
            <h3>{as_part[0]}</h3>
          </Consonant>
          <Consonant>
            <InputGroup.Text id="inputGroup-sizing-lg" style={style.x}>
              medial
            </InputGroup.Text>
            <Conbutton onClick={medial_leftmove}>&#171;</Conbutton>
            {middle_rendering()}
            <Conbutton onClick={medial_rightmove}>&#187;</Conbutton>
            <h3>{as_part[1]}</h3>
          </Consonant>
          <Consonant>
            <InputGroup.Text id="inputGroup-sizing-lg" style={style.x}>
              final
            </InputGroup.Text>
            <Conbutton onClick={final_leftmove}>&#171;</Conbutton>
            {final_rendering()}
            <Conbutton onClick={final_rightmove}>&#187;</Conbutton>
            <h3>{as_part[2]}</h3>
          </Consonant>
        </Text4>
        <Text5>
          <MakeButton
            text={"Get"}
            backgroundcolor={"lightyellow"}
            color={"black"}
            paddingsize={"2px"}
            fontsize={"20px"}
            marginsize={"10px"}
            radius={"10px"}
            width={"200px"}
            onClick={pdfclick}
          ></MakeButton>
          {pdf === 1 ? (
            <div>
              <div>Write the letters below and submit pdf including them.</div>
              {user_initial()}
              <br />
              {user_medial()}
              <br />
              {user_final()}
            </div>
          ) : null}
        </Text5>
      </Text3>
      <Text2>
        <h4>Upload File and Choose the gan of consonant respectively * jpeg</h4>
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
        <Button
          as="input"
          type="submit"
          value="Submit"
          onClick={handleclick}
          style={style.b}
        />
        {file === 1 ? <h3>파일을 올려주세요</h3> : null}
      </Text2>
    </Outcontainer>
  );
}
export default Form2;