import dotenv from "dotenv";

dotenv.load();

export const LOG_LEVEL = process.env.LOG_LEVEL || "debug";
export const CLUBS_COLLECTION = process.env.CLUBS_COLLECTION || "clubs";
export const REPORTS_COLLECTION = process.env.REPORTS_COLLECTION || "reports";
export const MONGODB_URL = process.env.NODE_ENV !== "test" ? process.env.MONGODB_URL : "mongodb://localhost:27017/test";
