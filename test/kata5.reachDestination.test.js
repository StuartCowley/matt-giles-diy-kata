const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(44, 5)).toEqual("I should be there in 9 hours.");
    expect(reachDestination(44, 20)).toEqual("I should be there in 2 hours.");
  });
});
