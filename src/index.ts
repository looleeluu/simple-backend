import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { data } from "./mocks";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

const port = 4000;

let todos: any[] = data;

app.post("/update", (req, res) => {
  console.log("updated", req.body);
  todos = req.body;

  return res.status(200).json({ success: true });
});

app.get("/list", (req, res) => {
  console.log("get list");
  res.status(200).json({ todos });
});

app.listen(port, () =>
  console.log(`Backend running on http://localhost:${port}!`)
);
