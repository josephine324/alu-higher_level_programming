#!/usr/bin/node
const request = require('request');
const baseUrl = process.argv[2];
const fs = require('fs');
const file = process.argv[3];
request(baseUrl, function (error, response) {
  if (error) console.log(error);
  const result = response.body;
  fs.writeFile(file, result, 'utf-8', (err) => {
    if (err) console.log(err);
  });
});
