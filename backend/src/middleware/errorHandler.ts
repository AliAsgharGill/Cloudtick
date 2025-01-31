import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("🔥 Server Error:", err.message);
  res.status(500).json({ success: false, message: "Internal Server Error" });
};

export default errorHandler;