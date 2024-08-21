/* eslint-env jest */
const { parseIntKeys, removeKeys, renameKeys } = require("./object.js");

describe("parseIntKeys", () => {
  it("should parse int keys", () => {
    expect(parseIntKeys({ a: "1", b: "x" }, "a")).toEqual({ a: 1, b: "x" });
  });
});

describe("removeKeys", () => {
  it("should remove keys", () => {
    expect(removeKeys({ a: 1, b: 2, c: 3 }, "b", "c")).toEqual({ a: 1 });
  });
});

describe("renameKeys", () => {
  it("should rename keys", () => {
    expect(renameKeys({ a: 1, b: 2, c: 3 }, { b: "e", c: "f" })).toEqual({
      a: 1,
      e: 2,
      f: 3,
    });
  });
});
