
var express = require('express');
var router = express.Router();
let fs = require('fs');
router.use(express.json());
let users = require('../user.json')



router.post(__dirname+'./user.json', (req, res) => {
    console.log('im here')
    let username = req.body.username
    let password = req.body.password
    const customer = {
        id: users.length + 1 ,
        name: `${username}`,
        password: `${password}`,
    }
    users.push(customer);

 // what to do
        return res.status(400).send(JSON.stringify({ message: "username and password doesnt match" }));
    })


module.exports = router;
