import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import MakeButton from "../components/button";
import { Nav, Navbar } from "react-bootstrap";
let Outcontainer = styled.div`
  height: 100%;
  width: 100%;
`;

let Header = styled.div`
  height: 10%;
  width: 100%;
`;
let Intro = styled.div`
  heigth: 40%;
  width: 100%;
  display: flex;
  align-items: center;
`;
let Download = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
  align-items: center;
`;
let Footer = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
  align-items: center;
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
let Listtext = styled.li`
  padding: 20px;
  font-size: 20px;
`;
let Spantext = styled.span`
  font-size: ${(props) => props.size};
  display: inline-block;
  margin-bottom: ${(props) => props.length};
`;
function Main() {
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
      <Intro>
        <Leftpart>
          <Spantext size={"25px"} length={"50px"}>
            Design your own font
          </Spantext>
          <div>
            <h1>GAN단한 폰트 제작소</h1>
          </div>
        </Leftpart>
        <Rightpart>
          <h3>사용법 안내</h3>

          <ol>
            <Listtext>
              양식에 맞춰 몇 가지 단어를 작성하고 나만의 폰트를 제작해보세요
            </Listtext>
            <Listtext>
              폰트 제작이 완료되면 이메일을 통해 전송해드립니다.
            </Listtext>
            <Listtext>
              만약 마음에 들지 않는 문자가 있으시다면, A/S도 가능합니다!
            </Listtext>
          </ol>
        </Rightpart>
      </Intro>
      <hr />
      <Download>
        <Leftpart>
          <h2>DownLoad Template</h2>
          <br />
          <div>
            <Spantext size={"20px"} length={"30px"}>
              제공되는 템플릿을 다운받아 양식에 맞게 작성하세요.
            </Spantext>
            <br />
            <Spantext size={"20px"} length={"30px"}>
              테블릿 혹은 디지털 펜으로 작성 후 jpg 파일로 제출해주세요
            </Spantext>
          </div>
        </Leftpart>
        <Rightpart>
          <MakeButton text={"Template.jpg"}></MakeButton>
          <MakeButton text={"Template.pdf"}></MakeButton>
        </Rightpart>
      </Download>
      <hr />
      <Footer>
        <Leftpart>
          <h2>A/S Service</h2>
          <br />
          <Spantext size={"20px"} length={"30px"}>
            제작된 폰트가 마음에 안드시나요???
          </Spantext>
        </Leftpart>
        <Rightpart>
          <MakeButton text={"A/S 신청하기"}></MakeButton>
        </Rightpart>
      </Footer>
    </Outcontainer>
  );
}
export default Main;
