import React from "react";
import styled from "styled-components";
import MakeButton from "../components/button";

let Outcontainer = styled.div`
  height: 100%;
  width: 100%;
`;
let Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  width: 100%;
`;
let Textdiv = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
let Footer = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

let Spantext = styled.span`
  font-size: ${(props) => props.size};
  display: inline-block;
  margin: ${(props) => props.margin};
`;

function ReD() {
  return (
    <Outcontainer>
      <Intro>
        <Spantext size={"25px"} margin={"50px 0 30px 0"}>
          Design your own font
        </Spantext>
        <div>
          <h1>GAN단한 폰트 제작소</h1>
        </div>
      </Intro>
      <Textdiv>
        <Spantext size={"35px"} margin={"50px 0 30px 0"}>
          <b>이용해주셔서 감사합니다</b>
        </Spantext>
      </Textdiv>
      <Footer>
        <Spantext size={"30px"} margin={"50px 0 30px 0"}>
          <b>Q&A</b>
        </Spantext>
        <div>
          <MakeButton
            text={
              <div>
                <span>
                  Q) 폰트를 제작하는데 걸리는 시간, 받는 방법이 궁금해요!
                </span>
                <br></br>
                <span>
                  A) 만드는데 <b>대략 30분</b>이 소요됩니다! 완료되는대로{" "}
                  <b>이메일</b>로 폰트 파일을 보내드릴게요!
                </span>
              </div>
            }
            backgroundcolor={"white"}
            color={"black"}
            paddingsize={"2px"}
            fontsize={"20px"}
            marginsize={"10px"}
            radius={"10px"}
          ></MakeButton>
          <MakeButton
            text={
              <div>
                <span>Q) 마음에 안들면 어떡하죠?</span>
                <br></br>
                <span>
                  A) 홈페이지에서 <b>A/S</b>를 신청해주세요! 마음에 들지 않는
                  부분을 <b>다시</b> 수정해서 드릴게요!
                </span>
              </div>
            }
            backgroundcolor={"white"}
            color={"black"}
            paddingsize={"2px"}
            fontsize={"20px"}
            marginsize={"10px"}
            radius={"10px"}
          ></MakeButton>
        </div>
      </Footer>
    </Outcontainer>
  );
}
export default ReD;
