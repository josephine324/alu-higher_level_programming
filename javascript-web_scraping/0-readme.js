#!/usr/bin/node
const fs = require('fs');
const file = process.argv[2];
fs.readFile(file, function (err, data) {
  if (err) console.log(err);
  console.log(data.toString());
});
