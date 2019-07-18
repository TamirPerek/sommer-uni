function input() {
  "use strict";

  const fs = require("fs");

  // small because I'm only reading a few bytes
  const BUFFER_LENGTH = 8;

  const stdin = fs.openSync("/dev/stdin", "rs");
  const buffer = Buffer.alloc(BUFFER_LENGTH);

  fs.readSync(stdin, buffer, 0, BUFFER_LENGTH);
  //   console.log(buffer.toString());
  fs.closeSync(stdin);
  return buffer.toString();
  fs.closeSync(stdin);
}

module.exports = input;
