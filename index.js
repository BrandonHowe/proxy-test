const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/:url', function (req, res) {
  if (!req.params.url) {
    res.redirect("discordapp.com");
  }
  let leurl = req.params.url;
  res.redirect(leurl);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
