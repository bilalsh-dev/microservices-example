import express from "express";
import { randomBytes } from "crypto";

const app = express();
app.use(express.json());
const posts = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(posts);
});

app.post("/posts/:id/comments", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
