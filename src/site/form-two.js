import React from "react";
import {
  InputGroup,
  FormControl,
  Nav,
  Navbar,
  Container,
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
  height: 30%;
  width: 100%;
`;

let Spantext = styled.span`
  font-size: ${(props) => props.size};
  display: inline-block;
  margin: ${(props) => props.margin};
`;

let Textdiv = styled.div`
  padding: ${(props) => props.paddingsize};
  height: 90%;
`;

let Submit = styled.div`
  padding: ${(props) => props.paddingsize};
`;
let Consonant = styled.div`
  display: flex;
  width: 100%;
  margin: ${(props) => props.marginsize};
`;
let Conbutton = styled.button`
  background-color: white;
  width: 50px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
`;

function Form2() {
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
          <Spantext size={"40px"} marginsize={"0 0 30px 300px"}>
            <b>A/S Service</b>
          </Spantext>
        </Intro>
        <Information>
          <Spantext size={"20px"}>
            Enter the information that you assigned
          </Spantext>
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
        <Upload>
          <Spantext size={"20px"}>
            Select the consonants that you want to revise
          </Spantext>
          <Consonant marginsize={"0 0 30px 0"}>
            <InputGroup.Text id="inputGroup-sizing-lg">initial</InputGroup.Text>
            <Conbutton>&#171;</Conbutton>
            <Conbutton>ㄱ</Conbutton>
            <Conbutton>ㄴ</Conbutton>
            <Conbutton>ㄷ</Conbutton>
            <Conbutton>ㄹ</Conbutton>
            <Conbutton>ㅁ</Conbutton>
            <Conbutton>ㅂ</Conbutton>
            <Conbutton>ㅅ</Conbutton>
            <Conbutton>ㅇ</Conbutton>
            <Conbutton>ㅈ</Conbutton>
            <Conbutton>ㅊ</Conbutton>
            <Conbutton>ㅋ</Conbutton>
            <Conbutton>ㅌ</Conbutton>
            <Conbutton>&#187;</Conbutton>
          </Consonant>
          <Consonant marginsize={"0 0 30px 0"}>
            <InputGroup.Text id="inputGroup-sizing-lg">initial</InputGroup.Text>
            <Conbutton>&#171;</Conbutton>
            <Conbutton>ㅏ</Conbutton>
            <Conbutton>ㅑ</Conbutton>
            <Conbutton>ㅓ</Conbutton>
            <Conbutton>ㅕ</Conbutton>
            <Conbutton>ㅗ</Conbutton>
            <Conbutton>ㅛ</Conbutton>
            <Conbutton>ㅜ</Conbutton>
            <Conbutton>ㅠ</Conbutton>
            <Conbutton>ㅡ</Conbutton>
            <Conbutton>ㅣ</Conbutton>
            <Conbutton>ㅢ</Conbutton>
            <Conbutton>ㅟ</Conbutton>
            <Conbutton>&#187;</Conbutton>
          </Consonant>
          <Consonant marginsize={"0 0 30px 0"}>
            <InputGroup.Text id="inputGroup-sizing-lg">initial</InputGroup.Text>
            <Conbutton>&#171;</Conbutton>
            <Conbutton>ㄱ</Conbutton>
            <Conbutton>ㄴ</Conbutton>
            <Conbutton>ㄷ</Conbutton>
            <Conbutton>ㄹ</Conbutton>
            <Conbutton>ㅁ</Conbutton>
            <Conbutton>ㅂ</Conbutton>
            <Conbutton>ㅅ</Conbutton>
            <Conbutton>ㅇ</Conbutton>
            <Conbutton>ㅈ</Conbutton>
            <Conbutton>ㅊ</Conbutton>
            <Conbutton>ㅋ</Conbutton>
            <Conbutton>ㅌ</Conbutton>
            <Conbutton>&#187;</Conbutton>
          </Consonant>
        </Upload>
        <Submit paddingsize={"0 0 0 200px"}>
          <MakeButton
            text={"Submit"}
            backgroundcolor={"lightyellow"}
            color={"black"}
            paddingsize={"2px"}
            fontsize={"20px"}
            marginsize={"10px"}
            radius={"10px"}
            width={"200px"}
          ></MakeButton>
        </Submit>
      </Textdiv>
    </Outcontainer>
  );
}
export default Form2;
