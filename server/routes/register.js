
var express = require('express');
var router = express.Router();
let fs = require('fs');
router.use(express.json());
let users = require('../user.json')

router.post('/', (req, res) => {
    console.log('im here')
    let username = req.body.username
    let password = req.body.password
    const customer = {
        id: users.length + 1,
        name: `${username}`,
        password: `${password}`,
    }
    users.push(customer);
    console.log(users)
    fs.writeFile(__dirname + '/user.json', JSON.stringify(users), (err) => {
        if (err) {
             throw err;
        }
        res.send(JSON.stringify('register completed'))
    });

})


module.exports = router;
