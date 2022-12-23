const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("Return Yes if True", () => {
    expect(booleanToWord(true)).toBe(`Yes`);
  });
  test("Return No if False", () => {
    expect(booleanToWord(false)).toBe(`No`);
  });
});
module.exports = {
  booleanToWord,
};