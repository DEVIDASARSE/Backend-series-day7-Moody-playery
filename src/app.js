const express = require("express");
const songRoutes = require("./routes/song.routes");


const app= express();
app.use(express.json());//used to middleware to parse JSON bodies
app.use("/songs", songRoutes); // Mounting song routes on /api




module.exports = app;