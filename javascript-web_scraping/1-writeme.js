#!/usr/bin/node
const handle = require('fs');
const file = process.argv[2];
const text = process.argv[3];
handle.writeFile(file, text, 'utf-8', function (err) {
  if (err) console.log(err);
});
