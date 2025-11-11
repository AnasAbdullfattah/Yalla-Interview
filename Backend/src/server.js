import express, { json } from "express";
import ENV from "./lib/env.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is the main page");
});

app.listen(ENV.PORT, () => {
  console.log(ENV.PORT);
});
