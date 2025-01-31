import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import { env } from "./config/env";
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import errorHandler from "./middleware/errorHandler";
import mongoose from "mongoose";
import router from "./routes";

const app = express();

app.use(errorHandler); // Must be after all route handlers
// CORS Configuration
app.use(
  cors({
    origin: env.CLIENT_URL, // Restrict to frontend domain
    credentials: true, // Allow cookies, auth headers, etc.
  })
);

app.use(express.json()); // Parse JSON body

app.use(router); // Use routes from routes/index.ts

// Connect to DB and Start Server
connectDB().then(() => {
  app.listen(env.PORT, () =>
    console.log(
      `Server running in ${env.NODE_ENV} mode on http://localhost:${env.PORT}`
    )
  );
});

process.on("SIGINT", async () => {
  console.log("🛑 Closing server...");
  await mongoose.connection.close();
  console.log("✅ MongoDB Connection Closed.");
  process.exit(0);
});
