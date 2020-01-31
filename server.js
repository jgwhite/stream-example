const faker = require("faker");
const express = require("express");
const app = express();
const port = 3000;

app.get("/data", async (req, res) => {
  res.contentType('text/plain');

  while (true) {
    let data = faker.system.fileName();
    console.log(`Sending "${data}"`);
    res.write(data + '\n');
    await sleep(100);
  }
});

app.use(express.static('public'));

app.listen(port);












// ----------------------------------------------
// Helpers
// ----------------------------------------------

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
