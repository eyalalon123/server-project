const express = require('express');
const fs = require('fs');
const router = require('router');



router.get('/create-file', (req, res) => {
    fs.writeFile(`${txtName}.txt`,`${text}`, (err) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(200).send('File created successfully');
  });
});
