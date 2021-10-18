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
import MakeButton from "../components/button";
let Outcontainer = styled.div`
  height: 100%;
  width: 100%;
`;

let Header = styled.div`
  height: 10%;
  width: 100%;
`;
let Intro = styled.div`
  heigth: 20%;
  width: 50%;
  display: flex;
  align-items: center;
`;
let Information = styled.div`
  height: 30%;
  width: 60%;
`;
let Upload = styled.div`
  height: 40%;
  width: 100%;
`;

let Leftpart = styled.div`
  padding-left: 300px;
  width: 50%;
`;
let Rightpart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 300px;
`;
let Spantext = styled.span`
  font-size: ${(props) => props.size};
  display: inline-block;
  margin-bottom: ${(props) => props.length};
  margin-right: ${(props) => props.rightlength};
  margin-left: ${(props) => props.leftlength};
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
  margin: 20px;
`;
let Textdiv = styled.div`
  padding-left: 200px;
  height: 90%;
`;

let Submit = styled.div`
  padding-left: 300px;
`;
function Form1() {
  return (
    <Outcontainer>
      <Header>
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
      </Header>
      <Textdiv>
        <Intro>
          <Spantext size={"40px"} length={"30px"} leftlength={"300px"}>
            <b>Submit your template</b>
          </Spantext>
        </Intro>
        <Information>
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">
              FONT NAME
            </InputGroup.Text>
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="font name"
            />
          </InputGroup>
          <br></br>
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">
              &nbsp; &nbsp;&nbsp;&nbsp; E-mail&nbsp;&nbsp;&nbsp;&nbsp;
            </InputGroup.Text>
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="E-mail Address"
            />
          </InputGroup>
        </Information>
        <Count>
          <Spantext size={"20px"}>
            The number of handwriting (maximum 3)
          </Spantext>
          <div>
            <label>
              <Radio type="checkbox" name="number" />1
            </label>
            &nbsp;&nbsp;
            <label>
              <Radio type="checkbox" name="number" /> 2
            </label>
            &nbsp;&nbsp;
            <label>
              <Radio type="checkbox" name="number" /> 3
            </label>
          </div>
        </Count>
        <Upload>
          <div>
            <Spantext size={"20px"} rightlength={"100px"}>
              Upload File and Choose the gan of consonant respectively
            </Spantext>
            <Spantext size={"20px"}>* jpg 파일로 제출해주세요</Spantext>
          </div>
          <div>
            <Fileform>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control type="file" size="lg" />
              </Form.Group>
              <div>
                <label>
                  <Radio type="checkbox" name="number" />
                  intial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" /> medial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" /> final
                </label>
              </div>
            </Fileform>
            <Fileform>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control type="file" size="lg" />
              </Form.Group>
              <div>
                <label>
                  <Radio type="checkbox" name="number" />
                  intial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" /> medial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" /> final
                </label>
              </div>
            </Fileform>
            <Fileform>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control type="file" size="lg" />
              </Form.Group>
              <div>
                <label>
                  <Radio type="checkbox" name="number" />
                  intial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" /> medial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" /> final
                </label>
              </div>
            </Fileform>
            <Submit>
              <MakeButton
                text={"Submit"}
                backgroundcolor={"lightyellow"}
              ></MakeButton>
            </Submit>
          </div>
        </Upload>
      </Textdiv>
    </Outcontainer>
  );
}
export default Form1;
