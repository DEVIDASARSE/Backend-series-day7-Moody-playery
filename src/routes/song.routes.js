const express = require("express");
const multer = require("multer");
const uploadFile= require("../service/storage.service");
const router = express.Router();

const songMOdel = require("../models/song.model");// Import the song model 

const upload = multer({ storage: multer.memoryStorage() });
// src/routes/song.routes.js
router.post("/songs", upload.single("audio"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const fileData = await uploadFile(req.file);
    // console.log(fileData);
    const song = await songMOdel.create({
      title: req.body.title,
      artist: req.body.artist,
      audio: fileData.url, // Use the URL from ImageKit
      mood: req.body.mood, // Assuming mood is also sent in the request body
    })


  res.status(201).json({
    message: "All songs fetched successfully",
    songs: req.body, 
  
  });
});


router.get("/songs", async (req, res) => {
   const {mood} = req.query; // mood = sad

   const songs = await songMOdel.find({
    mood: mood// mood body me nhi ayenga
   })

   res.status(200).json({
    message: " Song feached success",
    songs
   })
});

// (Optional) Add more routes like POST, PUT, DELETE here

module.exports = router;
