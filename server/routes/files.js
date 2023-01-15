const express = require('express');
const fs = require('fs');
const router = require('router');


router.post('/files', (req, res) => {
    textName = req.body.textName;
    text = req.body.text;
    fs.writeFile(`${textName}.txt`,`${text}`, (err) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(200).send('File created successfully');
  });
});
