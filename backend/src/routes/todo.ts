import express from "express";
import Todo from "../models/Todo";
const router = express.Router();

router.get("/:userId", async (req, res) => {
  const todos = await Todo.find({ userId: req.params.userId });
  res.json(todos);
});

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
});
export default router;
