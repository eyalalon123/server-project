const express = require('express');
const fs = require('fs');
const router = express.Router();


router.post('/', (req, res) => {

  fs.readdir('./texts/', (err, files) => {
        if (err) {
          res.status(500).send(err.message);
          return;
        }
        res.status(200).send(JSON.stringify(files))

});
}); 


module.exports = router;