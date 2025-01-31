import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});
export default mongoose.model("Task", TaskSchema);
