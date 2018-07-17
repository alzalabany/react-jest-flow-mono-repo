import I from "./index";

describe("sdk", () => {
  it("sums", () => {
    expect(I.sum()).toBe(3);
  });

  it("has a", () => expect(I.b).toBe(2));
});
