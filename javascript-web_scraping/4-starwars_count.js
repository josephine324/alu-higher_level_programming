#!/usr/bin/node
const request = require('request');
const baseUrl = process.argv[2];
request(baseUrl, function (error, response) {
  if (error) console.log(error);
  const result = JSON.parse(response.body);
  const data = result.results;
  let count = 0;
  data.forEach((item) => {
    item.characters.forEach((charUrl) => {
      if (charUrl.includes('18')) {
        count++;
      }
    });
  });
  console.log(count);
});
