#!/usr/bin/node
const num = process.argv[2];
const length = parseInt(num);
if (isNaN(length)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < length; i++) {
    let line = '';
    for (let j = 0; j < length; j++) {
      line += 'X';
    }
    console.log(line);
  }
}
