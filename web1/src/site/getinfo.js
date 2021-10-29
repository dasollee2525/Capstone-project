import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Formdata from "form-data";
function GetInfo() {
  let [fontname, fontname변경] = useState("");
  let [email, email변경] = useState("");
  let [check, check변경] = useState(false);
  let [img, img변경] = useState(null);

  const handleclick = (e) => {
    const fd = new FormData();
    fd.append("file", img);
    const json = JSON.stringify({
      fontname,
      email,
      check,
    });
    const blob = new Blob([json], {
      type: "application/json",
    });
    fd.append("info", blob);
    // fd.append("fontname", fontname);
    // fd.append("email", email);
    // fd.append("check", check);
    axios
      .post("http://localhost:8080/button", fd, {
        // headers: {
        //   "Content-type": "multipart/form-data",
        //   Accept: "application/json",
        // },
      })
      .then((res) => {
        console.log(res.data);
      });
    // axios
    //   .post(
    //     "http://localhost:8080/button",
    //     {
    //       fontname: fontname,
    //       email: email,
    //       check: check,
    //     },
    //     {
    //       headers: {
    //         "Content-type": "application/json",
    //         Accept: "application/json",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   });
  };
  return (
    <div>
      <label for="name">Name (4 to 8 characters):</label>
      <input
        type="text"
        id="name"
        name="name"
        size="10"
        onChange={(e) => {
          fontname변경(e.target.value);
        }}
      />
      <label for="password">Name (4 to 8 characters):</label>
      <input
        type="text"
        id="password"
        name="password"
        size="10"
        onChange={(e) => {
          email변경(e.target.value);
        }}
      />
      <input
        type="checkbox"
        onClick={() => {
          check변경(!check);
        }}
      />
      <button onClick={handleclick}>입력</button>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Control
          type="file"
          size="lg"
          onChange={(e) => {
            console.log(e.target.files[0]);
            img변경(e.target.files[0]);
          }}
        />
      </Form.Group>
    </div>
  );
}

export default GetInfo;
