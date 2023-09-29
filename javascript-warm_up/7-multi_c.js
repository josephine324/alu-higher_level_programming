#!/usr/bin/node
const num = process.argv[2];
const times = parseInt(num);
if (isNaN(times)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < times; i++) {
    console.log('C is fun');
  }
}
