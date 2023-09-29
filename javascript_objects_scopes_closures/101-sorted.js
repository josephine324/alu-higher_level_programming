#!/usr/bin/node
const { dict } = require('./101-data');

function computeUserIdsByOccurrence() {
  const userIdsByOccurrence = {};
  for (const userId in dict) {
    const occurrence = dict[userId];
    if (!(occurrence in userIdsByOccurrence)) {
      userIdsByOccurrence[occurrence] = [];
    }
    userIdsByOccurrence[occurrence].push(parseInt(userId));
  }

  return userIdsByOccurrence;
}

const userIdsByOccurrence = computeUserIdsByOccurrence();
console.log(userIdsByOccurrence);
