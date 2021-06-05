const express = require("express");
const router = express.Router();
const toDoController = require("../controllers/todo_controller");

router
  .get("/todos", toDoController.getAllToDo)
  .post("/todo", toDoController.createNewToDo)
  .get("/todo/:status", toDoController.getByStatus)
  .put("/todo/:id", toDoController.markAsCompleted)
  .get("/todos/search",toDoController.searchText)
  .delete("/todo/:id",toDoController.deleteElement)
module.exports = router;
