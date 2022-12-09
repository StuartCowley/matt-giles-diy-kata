const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(4321)).toEqual([1,2,3,4]);
    expect(numberToReversedDigits(54321)).toEqual([1,2,3,4,5]);
    expect(numberToReversedDigits(159)).toEqual([9,5,1]);
  });
});