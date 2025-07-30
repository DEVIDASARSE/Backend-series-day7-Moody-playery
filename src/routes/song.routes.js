const express = require("express");
const multer = require("multer");
const uploadFile= require("../service/storage.service");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });
// src/routes/song.routes.js
router.post("/songs", upload.single("audio"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const fileData = await uploadFile(req.file);
    console.log(fileData);
  res.status(201).json({
    message: "All songs fetched successfully",
    songs: req.body, 
  
  });
});

// (Optional) Add more routes like POST, PUT, DELETE here

module.exports = router;
