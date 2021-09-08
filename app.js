require("dotenv").config();
const express = require("express");
const port = 2000;
const router = require("./router");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => console.log(err.message));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to vercel hosting");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`lisening to port ${port}`);
});
