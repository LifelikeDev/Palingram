const { isPalindrome, isAlphanumeric } = require("./palindrome");

test("isAlphanumeric should be defined", () => {
  expect(isAlphanumeric).toBeDefined();
});

test("racecar is a palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
});
