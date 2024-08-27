/* eslint-env jest */
const {
  areObjectsEqual,
  parseIntKeys,
  removeKeys,
  renameKeys,
} = require("./object.js");

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

describe("areObjectsEqual", () => {
  it("should return true for two empty objects", () => {
    expect(areObjectsEqual({}, {})).toBe(true);
  });
  it("should return true for two null objects", () => {
    expect(areObjectsEqual(null, null)).toBe(true);
  });
  it("should return false if only one object is null", () => {
    expect(areObjectsEqual(null, {})).toBe(false);
    expect(areObjectsEqual({}, null)).toBe(false);
  });
  it("should return true if all primitive keys are equal", () => {
    expect(
      areObjectsEqual({ a: true, b: "two", c: 3 }, { c: 3, b: "two", a: true }),
    ).toBe(true);
  });
  it("should ignore functions and return true if all primitive keys are equal", () => {
    expect(
      areObjectsEqual(
        { a: true, b: "two", c: () => console.log("I like a") },
        { c: () => console.log("i like b"), b: "two", a: true },
      ),
    ).toBe(true);
  });
  it("should check objects recursively", () => {
    expect(
      areObjectsEqual(
        { a: true, b: "two", c: { d: 4 } },
        { a: true, b: "two", c: { d: 4 } },
      ),
    ).toBe(true);
    expect(
      areObjectsEqual(
        { a: true, b: "two", c: { d: 4 } },
        { a: true, b: "two", c: { d: 3 } },
      ),
    ).toBe(false);
  });
});
