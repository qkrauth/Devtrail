const dummyTestSum = require('./testModule');

test("adds 2 + 2 and equals 4", () => {
    expect(dummyTestSum(2, 2)).toBe(5)
});