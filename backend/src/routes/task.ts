import express from "express";
import Task from "../models/Task";
const router = express.Router();

router.get("/:userId", async (req, res) => {
  const tasks = await Task.find({ userId: req.params.userId });
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});
export default router;
