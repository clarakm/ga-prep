const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

const todoController = require("./controllers/todoController");

app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "../client/assets")));

app.get("/todo", todoController.getTodo, (req, res) => {
  res.status(200).json(res.locals.todo);
});

app.post("/todo", todoController.addTodo, (req, res) => {
  res.status(200).json(res.locals.newTodo);
});

app.post("/delete", todoController.deleteTodo, (req, res) => {
  res.sendStatus(200);
});

// app.put("/update", todoController.updateTodo, (req, res) => {
//   res.sendStatus(200);
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.use("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
