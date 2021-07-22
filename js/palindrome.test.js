const { isPalindrome, isAlphanumeric } = require("./palindrome");

test("isAlphanumeric should be defined", () => {
  expect(isAlphanumeric).toBeDefined();
});

test("a is alphanumeric", () => {
  expect(isAlphanumeric("a")).toBe(true);
});

test("* is not is alphanumeric", () => {
  expect(isAlphanumeric("*")).toBe(false);
});

test("isPalindrome should be defined", () => {
  expect(isPalindrome).toBeDefined();
});

test("racecar is a palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
});

test("borrow is not a palindrome", () => {
  expect(isPalindrome("borrow")).toBe(false);
});
