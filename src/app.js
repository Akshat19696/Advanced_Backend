import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIgiGIN,
    credentials: true,
  }),
);

// 3 major configuration we generally do to setup-backend
app.use(express.json({ limit: "16kb" })); //default 100 kb hoga agar nahi set hoga to
app.use(express.urlencoded({ extended: true })); //it now use qs library to parse the url-encoded data if false
//by default using query string library
app.use(express.static("public"));
app.use(cookieParser()); //taki server cient ko cookie bhej sake usme crud laga sake

//routes import
import userRouter from "./routes/user.routes.js";
//routes declaration
app.use("/api/v1/users", userRouter);
export default app;
