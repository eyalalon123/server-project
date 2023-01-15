
var express = require('express');
var router = express.Router();
let fs = require('fs/promises');


/* GET home page. */
router.post('/manage', function(req, res, next) {
    let username = req.body.username
    let password = req.body.password
    if (!username || !password){
        return res.status(400).send(JSON.stringify({message : " fuck off u little fuckhomo"}))
    }
    fs.readFile('../users/user.json')
    .then(data => JSON.parse(data))
    .then(data=> {
        data.forEach(user => {
            if (user.password === password && user.username === username){
                return res.status(200).send(JSON.stringify({message : "logged in!"}))
            }
            return res.status(400).send(JSON.stringify({message : "username and password doesnt match"}))
        });
    })
});


module.exports = router;
