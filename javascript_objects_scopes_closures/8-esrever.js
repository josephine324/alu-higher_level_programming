#!/usr/bin/node
exports.esrever = function (list) {
  const length = list.length;
  const newList = [];
  for (let i = length - 1; i >= 0; i--) {
    newList.push(list[i]);
  }
  return newList;
};
