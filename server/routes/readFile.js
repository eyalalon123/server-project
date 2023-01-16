const express = require('express');
const fs = require('fs');
const router = express.Router();


router.post('/', (req, res) => {
  let textName = req.body.textName
  let userOnline = req.body.userOnline

  fs.readFile(`./texts/${userOnline}/${textName}.txt`,"utf8", (err, data) => {
        if (err) {
          res.status(500).send(err.message);
          return;
        }
        res.status(200).send(data);
      if(data){
        console.log(data)
      }
});
}); 


module.exports = router;