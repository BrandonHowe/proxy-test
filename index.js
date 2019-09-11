const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/:url', function (req, res) {
  let leurl = req.params.url;
  res.redirect(leurl);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
