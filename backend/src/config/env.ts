import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 8080,
  API_VERSION: process.env.API_VERSION || "v1",
  MONGO_URI: process.env.MONGO_URI as string,
  NODE_ENV: process.env.NODE_ENV || "development",
  CLIENT_URL: process.env.CLIENT_URL || "*", // Set allowed CORS origin
  JWT_SECRET: process.env.JWT_SECRET || "secret",
};
