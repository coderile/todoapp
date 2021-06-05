const ToDo = require("../model/todomodel");

module.exports = {
  createNewToDo: async (req, res, next) => {
    const newTodo = new ToDo(req.body);
    try {
      const result = await newTodo.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(501).json({ message: "Internal server error" });
    }
  },
  getAllToDo: async (req, res, next) => {
    try {
      const allTodo = await ToDo.find({});
      res.status(200).json({ totalTodos: allTodo.length, allTodo });
    } catch (error) {
      res.status(404).json({ message: "Not Found" });
    }
  },
  getByStatus: async (req, res, next) => {
    try {
      const getByStatusToDos = await ToDo.find({ status: req.params.status });
      res
        .status(200)
        .json({ totalTodos: getByStatusToDos.length, getByStatusToDos });
      res.send(req.params);
    } catch (error) {
      res.status(404).json({ message: "Not Found" });
    }
  },
  markAsCompleted: async (req, res, next) => {
    try {
      const updatedTodo = await ToDo.findByIdAndUpdate(
        req.params.id,
        { status: "completed" },
        { new: true }
      );
      res.status(200).json({ completed: true, updatedTodo });
    } catch (error) {
      res.status(501).json({ message: "Internal server error" });
    }
  },
  searchText: async (req, res, next) => {
    try {
      const searchText = req.query.todo;
      const data = await ToDo.find({
        new_to_do: { $regex: searchText, $options: "$i" },
      });
      res.status(200).json({ totalNumber: data.length, data });
    } catch (error) {
      res.status(501).json({ message: "Internal server error" });
    }
  },
  deleteElement: async (req, res, next) => {
    try {
      const id = req.params.id;
      const deletedElement = await ToDo.findByIdAndDelete(id);
      res.status(200).json({ deleted: "Sucessfully" });
    } catch (error) {
      res.status(501).json({"message":"Internal server error"})
    }
  },
};
