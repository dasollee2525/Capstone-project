import React from "react";
import styled from "styled-components";
import MakeButton from "../components/button";
const Intro = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  align-items: center;
`;
const Text = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
  align-items: center;
`;
const Footer = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  align-items: center;
`;

let Lefttext = styled.div`
  margin: 100px;
  position: relative;
  left: 100px;
`;
let Righttext = styled.div`
  margin: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
let Listtext = styled.li`
  padding: 30px;
  font-size: 20px;
`;
let Spantext = styled.span`
  font-size: ${(props) => props.size};
  display: inline-block;
  margin-bottom: 30px;
`;
function Main() {
  return (
    <div className="outer">
      <Intro>
        <Lefttext>
          <Spantext size={"25px"}>Design your own font</Spantext>
          <div>
            <h1>GAN단한 폰트 제작소</h1>
          </div>
        </Lefttext>
        <Righttext>
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
        </Righttext>
      </Intro>
      <hr />
      <Text>
        <Lefttext>
          <h2>DownLoad Template</h2>
          <div>
            <Spantext>
              제공되는 템플릿을 다운받아 양식에 맞게 작성하세요.
            </Spantext>
            <br />
            <Spantext>
              테블릿 혹은 디지털 펜으로 작성 후 jpg 파일로 제출해주세요
            </Spantext>
          </div>
        </Lefttext>
        <Righttext>
          <MakeButton text={"Template.jpg"}></MakeButton>
          <MakeButton text={"Template.pdf"}></MakeButton>
        </Righttext>
      </Text>
      <hr />
      <Footer>
        <Lefttext>
          <h2>A/S Service</h2>
          <Spantext>제작된 폰트가 마음에 안드시나요???</Spantext>
        </Lefttext>
        <Righttext>
          <MakeButton text={"A/S 신청하기"}></MakeButton>
        </Righttext>
      </Footer>
    </div>
  );
}
export default Main;
