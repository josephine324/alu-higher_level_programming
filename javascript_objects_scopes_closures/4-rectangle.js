#!/usr/bin/node
class Rectangle {
  width;
  height;
  constructor(w, h) {
    if (w <= 0 || h <= 0 || w === undefined || h === undefined) {
      return;
    }
    this.width = w;
    this.height = h;
  }
  print() {
    for (let i = 0; i < this.height; i++) {
      let line = '';
      for (let j = 0; j < this.width; j++) {
        line += 'X';
      }
      console.log(line);
    }
  }
  double() {
    this.height *= 2;
    this.width *= 2;
  }

  rotate() {
    let exchange;
    exchange = this.width;
    this.width = this.height;
    this.height = exchange;
  }
}

module.exports = Rectangle;
