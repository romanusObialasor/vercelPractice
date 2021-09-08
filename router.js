const express = require("express");
const model = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  const getData = await model.find();
  res.json(getData);
});

router.get("/:id", async (req, res) => {
  const getSingle = await model.findById(req.params.id);
  res.json(getSingle);
});

router.post("/", async (req, res) => {
  const postData = await model.create(req.body);
  res.json(postData);
});

router.delete("/:id", async (req, res) => {
  const deleteData = await model.findByIdAndRemove(req.params.id, req.body);
  res.json(deleteData);
});

module.exports = router;

// {
//   "version": 2,
//   "builds": [{ "src": "app.js", "use": "@vercel/node" }],
//   "routes": [
//     {
//       "src": "/.*",
//       "dest": "/app.js",
//       "methods": ["GET"]
//     }
//   ]
// }
