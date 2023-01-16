const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const upload = multer();

router.post('/', upload.single("file"),(req,res) => {
    console.log(req.file)
    res.send("file")
})

module.exports = router;