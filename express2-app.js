const loremIpsum = require('lorem-ipsum');
const express = require('express');
let app = express();

app.get("/lorem/:count", function (req, res) {
  var count = req.params.count;
  console.log(count);
  let text = loremIpsum({
    count : count, 
    units : 'paragraphs',
    format: "html"
  });

  res.send(text);
});


app.listen(3000, function () {
  console.log('Successfully started express application!')
});
