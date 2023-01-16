const express = require('express');
const fs = require('fs');
const router = express.Router();


router.post('/', (req, res) => {
  console.log('im here')
  let textName = req.body.textName
  let text = req.body.text

  fs.writeFile(`./texts/${textName}.txt`,`${text}`, (err) => {
        if (err) {
          res.status(500).send(err.message);
          return;
        }
        res.status(200).send('File created successfully');
        console.log(`${textName}.txt`)
      });
    }); 


module.exports = router;
