import React from "react";
import { Button } from "react-bootstrap";
function Main() {
  return (
    <div className="outer">
      <div className="intro">
        <div className="title">
          <span>Design your own font</span>
          <h1>GAN단한 폰트 제작소</h1>
        </div>
        <div className="explain">
          <div>사용법 안내</div>
          <ol>
            <li>
              양식에 맞춰 몇 가지 단어를 작성하고 나만의 폰트를 제작해보세요
            </li>
            <li>폰트 제작이 완료되면 이메일을 통해 전송해드립니다.</li>
            <li>만약 마음에 들지 않는 문자가 있으시다면, A/S도 가능합니다!</li>
          </ol>
        </div>
      </div>
      <hr />
      <div className="text">
        <div className="template">
          <h1>Down Template</h1>
          <div>
            <span>제공되는 템플릿을 다운받아 양식에 맞게 작성하세요.</span>
            <br />
            <span>
              테블릿 혹은 디지털 펜으로 작성 후 jpg 파일로 제출해주세요
            </span>
          </div>
        </div>
        <div className="button">
          <Button variant="primary">Template.jpg</Button>
          <Button variant="primary">Template.pdf</Button>
        </div>
      </div>
      <hr />
      <div className="footer">
        <div>
          <h3>A/S Service</h3>
          <span>제작된 폰트가 마음에 안드시나요???</span>
        </div>
        <div className="button">
          <Button variant="primary">A/S 신청하기</Button>
        </div>
      </div>
    </div>
  );
}
export default Main;
