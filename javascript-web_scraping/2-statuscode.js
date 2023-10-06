#!/usr/bin/node
const request = require('request');
const resource = process.argv[2];
request(resource, function (err, response) {
  if (err) console.log(err);
  console.log(`code: ${response.statusCode}`);
});
