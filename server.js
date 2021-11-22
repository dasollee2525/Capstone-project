const url = require("./db.js");
const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
app.use(express.json());
const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
const httpProxy = require("http-proxy");
const proxy = httpProxy.createServer({});
const multer = require("multer");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
let db;
MongoClient.connect("mongodb+srv://sy1207:djfldjfl9325@cluster0.xolui.mongodb.net/capstone?retryWrites=true&w=majority", function (에러, client) {
  if (에러) return console.log(에러);
  db = client.db("capstone");
  console.log("a");
});

let dest = "";
let fileName;
let fontName;
let email;
let check;
let fontpart;
let count_sum = 1;
let i = 0;
let filelst = [];
let level = 0;
let font_url = "";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    dest = "web1/public";
    cb(null, "web1/public");
  },
  filename: function (req, file, cb) {
    new_file = fileName + String(i) + ".pdf";

    filelst.push(new_file);
    cb(null, new_file);
    i += 1;
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "file" },
  { name: "info" },
]);

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

app.post("/button", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
  });

  db.collection("counter").findOne(
    { name: "사용자수" },
    function (error, result) {
      count_sum = result.number;
      console.log(count_sum);
      let count = String(count_sum);
      res.send(count);
      db.collection("info").insertOne(
        {
          _id: count_sum + 1,
          file_name: filelst,
          font_name: fontName,
          email: email,
          user_number: check,
          fontpart: fontpart,
        },
        function (error, result) {
          console.log("저장완료");
          db.collection("counter").updateOne(
            { name: "사용자수" },
            { $inc: { number: 1 } },
            function (error, result) {
              if (error) {
                return console.log(error);
              }
            }
          );
        }
      );
    }
  );
  axios
    .post("http://127.0.0.1:5000/test", {
      method: "post",
      content: {
        fileName,
        email,
        fontName,
        check,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      // console.log(error);
    });
  let length = filelst.length;
  for (let k = 0; k < length; k++) {
    filelst.remove();
  }
});
app.post("/text", (req, res) => {
  fileName = req.body.fileName;
  fontName = req.body.fontName;
  email = req.body.email;
  check = req.body.check;
  fontpart = req.body.font_part;
  font_url = req.body.url;
});
app.post("/check", (req, res) => {
  let a = req.body.fontname;
  let b = req.body.email;

  db.collection("info").findOne(
    {
      email: b,
    },
    function (error, result) {
      if (result) {
        res.send("1");
        console.log("찾기완료");
        console.log(result.font_name);
      } else {
        res.send("0");
      }
    }
  );
});
app.get("/level1", (req, res) => {
  // axios.post("http://127.0.0.1:5000/user1", {
  //   method: "post",
  //   content: {
  //     level: "1",
  //   },
  // });
  setTimeout(res.send("1"), 3000);
});
app.get("/level2", (req, res) => {
  // axios.post("http://127.0.0.1:5000/user1", {
  //   method: "post",
  //   content: {
  //     level: "1",
  //   },
  // });
  setTimeout(res.send("1"), 3000);
});
app.get("/level3", (req, res) => {
  // axios.post("http://127.0.0.1:5000/user1", {
  //   method: "post",
  //   content: {
  //     level: "1",
  //   },
  // });
  setTimeout(res.send("1"), 3000);
});
app.get("/level4", (req, res) => {
  // axios.post("http://127.0.0.1:5000/user1", {
  //   method: "post",
  //   content: {
  //     level: "1",
  //   },
  // });
  setTimeout(res.send("1"), 3000);
});
let user_url = "";
app.post("/download", (req, res) => {
  let user_email = req.body.id;
  db.collection("info").findOne(
    {
      email: user_email,
    },
    function (error, result) {
      user_fontname = result.font_name;
      res.json({ user_fontname: user_fontname });
    }
  );
});