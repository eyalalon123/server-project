
var express = require('express');
var router = express.Router();
let fs = require('fs');
// const app = require('../app')



router.post('/', (req, res) => {
    console.log('im here')
    let username = req.body.username
    let password = req.body.password
    // if (!username || !password){
    //     return res.status(400).send(JSON.stringify({message : " fuck off u little fuckhomo"}))
    // }
    console.log(__dirname + '/../user.json')
    fs.readFile(__dirname + '/../user.json', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let user of JSON.parse(data)) {
            if (user.username === username) {
                if (user.password === password) {
                    return res.status(200).send(JSON.stringify({ message: "logged in!" }));
                }
            }
        }
        return res.status(400).send(JSON.stringify({ message: "username and password doesnt match" }));
        // .then(data => JSON.parse(data))
        // .then(data=> {
        //     data.forEach(user => {
        //         if (user.password === password && user.username === username){
        //             return res.status(200).send(JSON.stringify({message : "logged in!"}))
        //         }
        //         return res.status(400).send(JSON.stringify({message : "username and password doesnt match"}))
        //     });
        // })
    })});


    module.exports = router;
