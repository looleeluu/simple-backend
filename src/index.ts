import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { data } from "./mocks";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

let todos: any[] = data;

app.post("/update", (req, res) => {
  console.log(req.body);
  todos = req.body.todos;

  return res.status(200).json({ success: true });
});

app.get("/list", (req, res) => res.status(200).json({ todos }));

app.listen(port, () =>
  console.log(`Backend running on http://localhost:${port}!`)
);
