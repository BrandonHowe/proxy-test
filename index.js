const atob = require("atob");
const btoa = require("btoa");

const request = require('request');

require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/:url', function (req, res) {
  // console.log("request sent");
  let over = false;
  let linkmatch = req.params.url.match(/^[a-z0-9\/:=]+$/i);
  // console.log(req.params.url);
  if (linkmatch == null) {
    over = true;
  }
  if (over == false) {
  let leurl = req.params.url;
  // console.log(leurl);
  let actualurl = atob(leurl);
  console.log("URL: " + actualurl);
  // let urlhead = actualurl.match(/(http|https):\/\/[^\/]*\//g);
  // // console.log(urlhead);
  // urlhead = urlhead[0].slice(0, urlhead[0].length - 1);
  // console.log("URL HEAD: " + urlhead);

    // request(("https://cors-escape.herokuapp.com/" + actualurl), {json: true}, (err, result, body) => {
    //   if (err) throw err;
    //   console.log(body);
    //   res.send(body);
    // })

  // request(actualurl, { json: true }, (err, result, body) => {
  //   if (err) { return console.log(err); }
  //   let newbody = body.replace(/href="[^"]*"/g, function (x) {
  //     let maintext = x.replace(/".*"/g, function (y) {
  //       // console.log("Original: " + y);
  //       let shortenedtext = y.split("");
  //       shortenedtext.pop();
  //       shortenedtext.shift();
  //       // console.log("Modified original: " + shortenedtext.join(""));
  //       shortenedtext = shortenedtext.join("");
  //       // console.log("First char: " + shortenedtext.charAt(0));
  //       console.log("Original shortened:" + shortenedtext);
  //       if (shortenedtext.charAt(0) === "/") {
  //         if (shortenedtext.charAt(1) !== "/") {
  //           shortenedtext = actualurl + shortenedtext;
  //         } else {
  //           shortenedtext = shortenedtext.slice(2);
  //         }
  //       }
  //       console.log("Shortened: " + shortenedtext);
  //       // console.log("Shortened changed: " + actualurl + "/" + shortenedtext);
  //       // shortenedtext = actualurl + "/" + shortenedtext;
  //       // const prebuffer = new Buffer(shortenedtext);
  //       const encodedText = btoa(shortenedtext);
  //       // const encodedText = prebuffer.toString("base64");
  //       console.log("Encoded text: " + encodedText);
  //       const returnedText = "\"/" + encodedText + "\"";
  //       console.log(`Returned text: ${returnedText}`);
  //       return returnedText;
  //     })
  //     console.log("Main text: " + maintext);
  //     return maintext;
  //   })
  //   // console.log(newbody);
  //   res.send(newbody + "<script>document.domain = " + actualurl + "</script>");
  // });
  }
})

app.get("/", (req, res) => {
  console.log(btoa("/blah"));
  request('https://old.reddit.com', { json: true }, (err, result, body) => {
    if (err) { return console.log(err); }
    res.sendFile("index.html", {root: "."});
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))