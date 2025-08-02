var Imagekit = require("imagekit");

var mongoose = require("mongoose")

var imagekit = new Imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

//promise based function to upload file to imagekit
function uploadFile(file) {
    return new Promise((resolve, reject) => {
     imagekit.upload({
        file: file.buffer, // the file buffer
        fileName:(new mongoose.Types.ObjectId()).toString(), // file name to be saved in ImageKit
        folder: "cohort-audio", // optional, can be used to specify a folder in ImageKit
    },(error, result) => {
        if (error) {
            reject(error);
        } else {
            resolve(result);
        }
    })
});
}


module.exports = uploadFile;