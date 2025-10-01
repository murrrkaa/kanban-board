import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN_FRONTEND_URL,
  }),
);

app.get("/", (req, res) => {
  res.send("<h2>Привет Express!</h2>");
});

app.listen(process.env.PORT, () => console.log("SERVER STARTED"));
