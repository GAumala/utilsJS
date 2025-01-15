/* eslint-env jest */
const { isParentDir } = require("./path.js");

describe("isParentDir", () => {
  it("should return true if first path is direct parent of second", () => {
    const path1 = "/home/user/Documents";
    const path2 = "/home/user/Documents/mypic.jpg";
    const res = isParentDir(path1, path2);
    expect(res).toBe(true);
  });
  it("should return true if first path is parent of second", () => {
    const path1 = "/home/user/Documents";
    const path2 = "/home/user/Documents/trip/photos/mypic.jpg";
    const res = isParentDir(path1, path2);
    expect(res).toBe(true);
  });
  it("should return false if first path is at same level of second", () => {
    const path1 = "/home/user/Documents";
    const path2 = "/home/user/.bashrc";
    const res = isParentDir(path1, path2);
    expect(res).toBe(false);
  });
  it("should return false if first path is not parent of second", () => {
    const path1 = "/home/user/Documents";
    const path2 = "/etc/passwd";
    const res = isParentDir(path1, path2);
    expect(res).toBe(false);
  });
});
