import React from "react";

export default class Example3 extends React.Component {
  state = {
    text: "",
  };
  check = {
    text1: "",
  };
  handlChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onclick = () => {
    const textbox = {
      inText: this.state.text,
    };
    fetch("http://localhost:8080/text", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(textbox),
    });
  };
  onclick1 = () => {
    fetch("http://localhost:8080/text1", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          text: json.text,
        });
      });
  };
  onclick2 = () => {
    fetch("http://localhost:8080/text2", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.check.text1 = json.text;
      });
  };
  render() {
    return (
      <div>
        <input name="text" onChange={this.handlChange}></input>
        <button onClick={this.onclick}>전송</button>
        <button onClick={this.onclick1}>받기</button>
        <h3>{this.state.text}</h3>
        <input name="text" onChange={this.handlChange}></input>
        <h3>{this.check.text1}</h3>
        <button onClick={this.onclick2}>확인</button>
      </div>
    );
  }
}
