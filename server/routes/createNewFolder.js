const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');


router.post('/', (req, res) => {
    console.log('im here');
    const folderName = req.body.username;
    const youtube = path.join(`/home/hilma/Desktop/server-project/server/texts/${folderName}`);
    if (!fs.existsSync(youtube)) {
        console.log('new folder has been created!')
        fs.mkdirSync(youtube);
    }
    res.send(JSON.stringify('your mother is gay'))

});

module.exports = router;
