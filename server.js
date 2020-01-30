const faker = require("faker");
const express = require("express");
const app = express();
const port = 3000;

app.get("/data", async (req, res) => {
  res.contentType('text/plain');

  while (true) {
    res.write(faker.system.fileName() + '\n');
    await sleep(100);
  }
});

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
