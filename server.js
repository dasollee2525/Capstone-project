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
// const MongoClient = require("mongodb").MongoClient;
// let db;
// MongoClient.connect(url, function (에러, client) {
//   if (에러) return console.log(에러);
//   db = client.db("capstone");
//   console.log("a");
// });
let font = [["1"], ["2"], ["3"]];
let font_code = [["1"], ["2"], ["3"]];
let dest = "";
let fileName;
let fontName;
let email;
let check;
let fontpart;
let count_sum = 1;
let i = 0;
let filelst = [];
let font_as = "0";
let as_part;
let modified;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    dest = "web1/public";
    cb(null, "web1/public");
  },
  filename: function (req, file, cb) {
    new_file = fileName + String(i) + ".pdf";
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

app.post("/text", (req, res) => {
  //form-one 1단계
  fileName = req.body.fileName; //filelist에 들어갈 값
  fontName = req.body.fontName; //생성될 ttf의 이름
  email = req.body.email; // 사용자 email
  check = req.body.check; // 몇 명인지
  fontpart = req.body.font_part; // [1,0,2]
  console.log(fontpart);
  font_as = req.body.as; // as : 0
  modified = [0, 0, 0]; // 수정되었는지 여부
  for (let k = 0; k < parseInt(check); k++) {
    filelst.push(fileName + String(k) + ".pdf");
  }
});

app.post("/button", (req, res) => {
  //form-one 2단계
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
  });
  //  db.collection("counter").findOne(
  //    { name: "사용자수" },
  //    function (error, result) {
  //      count_sum = result.number;
  //      let count = String(count_sum);
  //
  //      db.collection("info").insertOne(
  //        {
  //          _id: count_sum + 1,
  //          file_name: filelst,
  //          font_name: fontName,
  //          email: email,
  //          user_number: check,
  //          fontpart: fontpart,
  //          as: font_as,
  //          as_font_name: "empty",
  //        },
  //        function (error, result) {
  //          console.log("저장완료");
  //          db.collection("counter").updateOne(
  //            { name: "사용자수" },
  //            { $inc: { number: 1 } },
  //            function (error, result) {
  //              if (error) {
  //                return console.log(error);
  //              }
  //            }
  //          );
  //        }
  //      );
  //    }
  //  );
  i = 0;
});
app.post("/level1", (req, res) => {
  axios
    .post("http://127.0.0.1:5000/step1", {
      method: "post",
      content: {
        filelst,
        fontName,
        check,
        font_as,
        fontpart,
        as_part,
        font,
        font_code,
        modified,
      },
    })
    .then((response) => {
      console.log("level1");
      res.sendStatus(200);
      while (filelst.length > 0) {
        filelst.pop();
      }
    });
});
app.post("/level2", (req, res) => {
  axios
    .post("http://127.0.0.1:5000/step2", {
      method: "post",
      content: {
        filelst,
        fontName,
        check,
        font_as,
        fontpart,
        as_part,
        font,
        font_code,
        modified,
      },
    })
    .then((response) => {
      console.log("level2");
      if (font_as === "0") {
        res.json({ fontName: fontName, as: "0" });
      } else {
        res.sendStatus(200);
      }
    });
});
app.post("/level3", (req, res) => {
  axios
    .post("http://127.0.0.1:5000/step3", {
      method: "post",
      content: {
        filelst,
        fontName,
        check,
        font_as,
        fontpart,
        font,
        font_code,
        modified,
      },
    })
    .then((response) => {
      console.log("level3");
      res.sendStatus(200);
    });
});
app.post("/level4", (req, res) => {
  console.log("끝");
});
app.post("/check", (req, res) => {
  let a = req.body.fontname;
  let b = req.body.email;

  // db.collection("info").findOne(
  //   {
  //     email: b,
  //   },
  //   function (error, result) {
  //     if (result) {
  //       res.send("1");
  //       console.log("찾기완료");
  //       console.log(result.font_name);
  //     } else {
  //       res.send("0");
  //     }
  //   }
  // );
});

app.post("/download", (req, res) => {
  res.json({ fontName: fontName });

  // db.collection("info").findOne(
  //   {
  //     email: user_email,
  //   },
  //   function (error, result) {
  //     if (result.as === "0") {
  //       user_fontname = result.font_name;
  //       res.json({ user_fontname: user_fontname });
  //     } else if (result.as === "1") {
  //       user_fontname = result.as_font_name;
  //       res.json({ user_fontname: user_fontname });
  //     }
  //   }
  // );
});
app.post("/as1", (req, res) => {
  fileName = fileName + "as";
  fontName = fontName + "as";
  check = req.body.check;
  fontpart = req.body.font_part;
  font_as = req.body.as;
  as_part = req.body.as_part;
  font = req.body.font_as;
  font_code = req.body.font_as_code;
  modified = [1, 0, 1];
  console.log(font);
  console.log(font_code);
  //  if (font[0].length == 0) {
  //    modified[fontpart[0]] = 0;
  //  }
  //  if (font[1].length == 0) {
  //    modified[fontpart[1]] = 0;
  //  }
  //  if (font[2].length == 0) {
  //    modified[fontpart[2]] = 0;
  //  }
  for (let k = 0; k < parseInt(check); k++) {
    filelst.push(fileName + String(k) + ".pdf");
  }
  //  db.collection("info").updateOne(
  //    {
  //      email: email,
  //    },
  //    { $set: { as: "1", as_font_name: fileName } }
  //  );
});
app.post("/as2", (req, res) => {
  i = 0;
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
  });
});
app.post("/font", (req, res) => {
  res.json({ email: email });
});