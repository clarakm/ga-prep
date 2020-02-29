const db = require("../db/model");
const todoController = {};

todoController.getTodo = async (req, res, next) => {
  const todo = `
        SELECT * FROM todo
    `;
  const result = await db.query(todo);
  console.log(" get query", result.rows);
  res.locals.todo = result.rows;
  next();
};

todoController.addTodo = async (req, res, next) => {
  console.log("in add todo");
  const todo = `
        INSERT INTO todo (item)
        VALUES($1)
        RETURNING *
    `;

  const val = req.body.item;
  console.log("req", val);
  const result = await db.query(todo, [val]);
  console.log("add query", result.rows);
  res.locals.newTodo = result.rows;
  next();
};

todoController.deleteTodo = async (req, res, next) => {
  console.log("in delete");
  const todo = `
        DELETE FROM todo
        WHERE todo.item = ($1)
    `;
  const val = req.body.item;
  console.log(req.body.item);
  const result = await db.query(todo, [val]);
  //   console.log("res", result.rows);
  res.locals.deleteTodo = result.rows;
  next();
};

module.exports = todoController;
