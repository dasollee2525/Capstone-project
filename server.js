const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
http.listen(8080, function () {
  console.log("listening on 8080");
});
app.use(express.static(path.join(__dirname, "web1/build")));
app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/web1/build/index.html"));
});
app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/web1/build/index.html"));
});

app.post("/text", (req, res) => {
  const text1 = req.body.inText;
  var fs = require("fs");
  var readline = require("readline");
  var path = "test1.txt";
  fs.open(path, "a+", function (err, fd) {
    if (err) throw err;
    if (fd == "9") {
      console.log("file create.");
    } else {
      fs.appendFile("test1.txt", text1 + "\n", function (err) {
        if (err) throw err;
      });
    }
  });

  axios("http://127.0.0.1:5000/test", {
    method: "get",
  })
    .then(response => {
    console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  axios.post("http://127.0.0.1:5000/test", {
    method: "post",
    content: "testData", 
  })
    .then(response => {
    console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });
});

app.post("/text1", (req, res) => {
  var fs = require("fs");
  var readline = require("readline");
  var path = "test1.txt";
  fs.open(path, "a+", function (err, fd) {
    if (err) throw err;
    if (fd == "9") {
      console.log("file create.");
    } else {
      fs.readFile(path, "utf8", function (err, data) {
        const sendText = {
          text: data,
        };
        res.send(sendText);
      });
    }
  });
});

app.post("/text2", (req, res) => {
  var fs = require("fs");
  cons;
  var readline = require("readline");
  var path = "test1.txt";
  fs.open(path, "a+", function (err, fd) {
    if (err) throw err;
    if (fd == "9") {
      console.log("file create.");
    } else {
      fs.readFile(path, "utf8", function (err, data) {
        data = 0;
        const sendText = {
          text: data,
        };
        res.send(sendText);
      });
    }
  });
});
