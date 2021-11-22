import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import MakeButton from "../components/button";
import { Nav, Navbar } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";
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
  padding: ${(props) => props.paddingsize};
  font-size: ${(props) => props.fontsize};
`;
let Spantext = styled.span`
  font-size: ${(props) => props.fontsize};
  display: inline-block;
  margin: ${(props) => props.margin};
`;
const GlobalStyle = createGlobalStyle`
	font-family: 'HarryFont'
`;
const HeadLine = styled.h1`
  font-family: "HarryFont";
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
          <Spantext fontsize={"25px"} margin={"0 0 50px 0"}>
            Design your own font
          </Spantext>
          <GlobalStyle>
            <HeadLine>헤드라인입니다</HeadLine>
          </GlobalStyle>
          <div>
            <h1>GAN단한 폰트 제작소</h1>
          </div>
        </Leftpart>
        <Rightpart>
          <h3>사용법 안내</h3>

          <ol>
            <Listtext paddingsize={"20px"} fontsize={"20px"}>
              양식에 맞춰 몇 가지 단어를 작성하고 나만의 폰트를 제작해보세요
            </Listtext>
            <Listtext paddingsize={"20px"} fontsize={"20px"}>
              폰트 제작이 완료되면 이메일을 통해 전송해드립니다.
            </Listtext>
            <Listtext paddingsize={"20px"} fontsize={"20px"}>
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
            <Spantext fontsize={"20px"} length={"30px"}>
              제공되는 템플릿을 다운받아 양식에 맞게 작성하세요.
            </Spantext>
            <br />
            <Spantext fontsize={"20px"} length={"30px"}>
              테블릿 혹은 디지털 펜으로 작성 후 jpg 파일로 제출해주세요
            </Spantext>
          </div>
        </Leftpart>
        <Rightpart>
          <MakeButton
            text={"Template.jpg"}
            backgroundcolor={"white"}
            color={"black"}
            paddingsize={"2px"}
            fontsize={"20px"}
            marginsize={"10px"}
            radius={"10px"}
            width={"200px"}
          ></MakeButton>
          <MakeButton
            text={"Template.pdf"}
            backgroundcolor={"white"}
            color={"black"}
            paddingsize={"2px"}
            fontsize={"20px"}
            marginsize={"10px"}
            radius={"10px"}
            width={"200px"}
          ></MakeButton>
        </Rightpart>
      </Download>
      <hr />
      <Footer>
        <Leftpart>
          <h2>A/S Service</h2>
          <br />
          <Spantext fontsize={"20px"} length={"30px"}>
            제작된 폰트가 마음에 안드시나요???
          </Spantext>
        </Leftpart>
        <Rightpart>
          <MakeButton
            text={"A/S 신청하기"}
            backgroundcolor={"white"}
            color={"black"}
            paddingsize={"2px"}
            fontsize={"20px"}
            marginsize={"10px"}
            radius={"10px"}
            width={"200px"}
          ></MakeButton>
        </Rightpart>
      </Footer>
    </Outcontainer>
  );
}
export default Main;