/* eslint-env jest */
const { Buffer } = require("node:buffer");
const { serializeToBuffer, deserializeFromBuffer } = require("./buffer.js");

test("should convert an object to a buffer and back", () => {
  const input = { a: 1, b: "Hi", c: [2, 3] };
  const output = serializeToBuffer(input);

  expect(output).toBeInstanceOf(Buffer);
  expect(deserializeFromBuffer(output)).toEqual(input);
});

test("should convert an array to a buffer and back", () => {
  const input = [{ a: 1 }, { b: "Hi" }, { a: 2 }];
  const output = serializeToBuffer(input);

  expect(output).toBeInstanceOf(Buffer);
  expect(deserializeFromBuffer(output)).toEqual(input);
});
