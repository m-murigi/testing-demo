let lib = require("./index");

describe("Addition", () => {
  it("Should return sum of two numbers", () => {
    let ans = lib.sum(2, 3);
    expect(ans).toEqual(5);
  });
  it("should return Invalid input when either of the input is not a number", () => {
    let out = lib.sum("a", 7);
    expect(out).toContain("Invalid input");
  });
});
describe("Subtraction", () => {
  it("Should return the difference of two numbers", () => {
    let diff = lib.difference(20, 10);
    expect(diff).toBe(10);
  });
  it("should return Invalid input when either of the input is not a number", () => {
    let out = lib.sum("a", 7);
    expect(out).toContain("Invalid input");
  });
});
