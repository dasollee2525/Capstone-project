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
import GetInfo from "./getinfo";
import Info from "./info";
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

let Spantext = styled.span`
  font-size: ${(props) => props.fontsize};
  display: inline-block;
  margin: ${(props) => props.marginsize};
`;
let Textdiv = styled.div`
  padding: ${(props) => props.paddingsize};
  height: 90%;
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
        <Info />
      </Textdiv>
    </Outcontainer>
  );
}
export default Form1;
