const express = require("express");
const bodyParser = require("body-parser"); // Middleware to parse JSON
const urlroute = require("./routes/url");
const { connecttomonogodb } = require("./connect");

const app = express();
const port = 8001;

app.use(bodyParser.json()); // Add middleware to parse JSON request bodies
app.use("/url", urlroute);

connecttomonogodb("mongodb://localhost:27017/shorturl")
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => console.log(`server started at port: ${port}`));
