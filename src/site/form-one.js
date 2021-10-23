import React from "react";
import {
  InputGroup,
  FormControl,
  Nav,
  Navbar,
  Container,
  Form,
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

let Spantext = styled.span`
  font-size: ${(props) => props.fontsize};
  display: inline-block;
  margin: ${(props) => props.marginsize};
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
let Textdiv = styled.div`
  padding: ${(props) => props.paddingsize};
  height: 90%;
`;

let Submit = styled.div`
  padding: ${(props) => props.paddingsize};
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
      <Textdiv paddingsize={"0 0 0 200px"}>
        <Intro>
          <Spantext fontsize={"40px"} marginsize={"0 0 30px 300px"}>
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
          <Spantext fontsize={"20px"}>
            The number of handwriting (maximum 3)
          </Spantext>
          <div>
            <label>
              <Radio type="checkbox" name="number" marginsize={"20px"} />1
            </label>
            &nbsp;&nbsp;
            <label>
              <Radio type="checkbox" name="number" marginsize={"20px"} /> 2
            </label>
            &nbsp;&nbsp;
            <label>
              <Radio type="checkbox" name="number" marginsize={"20px"} /> 3
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
                <Form.Control type="file" size="lg" />
              </Form.Group>
              <div>
                <label>
                  <Radio type="checkbox" name="number" marginsize={"20px"} />
                  initial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" marginsize={"20px"} />{" "}
                  medial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" marginsize={"20px"} />{" "}
                  final
                </label>
              </div>
            </Fileform>
            <Fileform>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control type="file" size="lg" />
              </Form.Group>
              <div>
                <label>
                  <Radio type="checkbox" name="number" marginsize={"20px"} />
                  initial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" marginsize={"20px"} />{" "}
                  medial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" marginsize={"20px"} />{" "}
                  final
                </label>
              </div>
            </Fileform>
            <Fileform>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control type="file" size="lg" />
              </Form.Group>
              <div>
                <label>
                  <Radio type="checkbox" name="number" marginsize={"20px"} />
                  initial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" marginsize={"20px"} />{" "}
                  medial
                </label>
                &nbsp;&nbsp;
                <label>
                  <Radio type="checkbox" name="number" marginsize={"20px"} />{" "}
                  final
                </label>
              </div>
            </Fileform>
            <Submit paddingsize={"0 0 0 300px"}>
              <MakeButton
                color={"black"}
                paddingsize={"2px"}
                fontsize={"20px"}
                marginsize={"10px"}
                radius={"10px"}
                width={"200px"}
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
