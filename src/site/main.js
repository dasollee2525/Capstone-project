import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
const Intro = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
const Text = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
const Footer = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

let Lefttext = styled.div`
  position: relative;
  left: 30px;
`;
let Right = styled.div`
  position: relative;
  right: 10px;
`;
function Main() {
  return (
    <div className="outer">
      <Intro>
        <Lefttext>
          <span>Design your own font</span>
          <h1>GAN단한 폰트 제작소</h1>
        </Lefttext>
        <Right>
          <div>사용법 안내</div>
          <ol>
            <li>
              양식에 맞춰 몇 가지 단어를 작성하고 나만의 폰트를 제작해보세요
            </li>
            <li>폰트 제작이 완료되면 이메일을 통해 전송해드립니다.</li>
            <li>만약 마음에 들지 않는 문자가 있으시다면, A/S도 가능합니다!</li>
          </ol>
        </Right>
      </Intro>
      <hr />
      <Text>
        <Lefttext>
          <h2>DownLoad Template</h2>
          <div>
            <span>제공되는 템플릿을 다운받아 양식에 맞게 작성하세요.</span>
            <br />
            <span>
              테블릿 혹은 디지털 펜으로 작성 후 jpg 파일로 제출해주세요
            </span>
          </div>
        </Lefttext>
        <Right>
          <Button variant="primary">Template.jpg</Button>
          <Button variant="primary">Template.pdf</Button>
        </Right>
      </Text>
      <hr />
      <Footer>
        <Lefttext>
          <h2>A/S Service</h2>
          <span>제작된 폰트가 마음에 안드시나요???</span>
        </Lefttext>
        <Right>
          <Button variant="primary">A/S 신청하기</Button>
        </Right>
      </Footer>
    </div>
  );
}
export default Main;
