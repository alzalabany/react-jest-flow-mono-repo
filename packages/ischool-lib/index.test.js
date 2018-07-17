import I from "./index";
import Is from "ischool-sdk/index";

describe("lib", () => {
  it("run", () => {
    expect(I).toBe("hello world");
  });
});

describe("i-sdk", () => {
  it("sum", () => expect(Is.sum()).toBe(Is.a + 2));
  it("has b", () => expect(Is.b).toBe(2));
});
