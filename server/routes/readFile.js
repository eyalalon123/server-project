const express = require('express');
const fs = require('fs');
const router = express.Router();


router.post('/', (req, res) => {
  let textName = req.body.textName

  fs.readFile(`./texts/${textName}.txt`,"utf8", (err, data) => {
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