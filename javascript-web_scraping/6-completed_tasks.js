#!/usr/bin/node
const request = require('request');
const baseUrl = process.argv[2];
let count = {};
request(baseUrl, (error, response) => {
  if (error) console.log(error);
  const result = JSON.parse(response.body);
  result.forEach((item) => {
    if (item.completed == true) {
      if (item.userId in count) {
        count[item.userId] += 1;
      } else {
        count[item.userId] = 1;
      }
    }
  });
  console.log(count);
});
