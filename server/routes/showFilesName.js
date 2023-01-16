const express = require('express');
const fs = require('fs');
const router = express.Router();


router.post('/', (req, res) => {

    fs.readdir('./texts/', (err, files) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        let modifiedFiles = []
        files.forEach((file) => {
            if (file.endsWith(".txt")) {
                let newName = file.slice(0, -4);
                modifiedFiles.push(newName)
            }
        });
        res.status(200).send(JSON.stringify(modifiedFiles));
    });


});


module.exports = router;