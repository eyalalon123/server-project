const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const path = require('path');


router.post('/', upload.single("file"), (req, res) => {
    try {
        const file = req.file;
        const dir = './texts';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        // create a unique file name
        const fileName = file.originalname 
        const filePath = path.join(dir, fileName);
        // write the file to the server
        fs.writeFileSync(filePath, file.buffer);
        res.status(200).json({ message: "file uploaded successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error uploading file" });
    }
});

module.exports = router;
