const express = require('express');
const fs = require('fs');
const router = express.Router();


router.delete('/', (req, res) => {
  let textName = req.body.textName
  let userOnline = req.body.userOnline

  fs.unlink(`./texts/${userOnline}/${textName}.txt`, (err) => {
        if (err) {
          res.status(500).send(err.message);
          return;
        }
        res.status(200).send(`Successfully deleted {./texts/${textName}.txt}`);
      
});
}); 


module.exports = router;