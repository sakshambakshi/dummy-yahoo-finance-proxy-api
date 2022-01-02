const express = require("express");
const server = express();
const cors = require('cors')
server.use(cors())
console.log("hello")
server.get("/get/:symbol", async function (req, res) {
  const axios = require("axios");

  const  config = {
    method: "get",
    url: `https://query1.finance.yahoo.com/v8/finance/chart/${req.params.symbol}`,
    headers: {},
  };

  const {data} = await axios(config)
  console.log({data})
    return res.json(data)
});


server.listen(8000, async () => {
    console.log("started")

});
