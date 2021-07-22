import { isAnagram, neutralizeStr } from "./anagram.js";

// check if both functions are defined or not
test("isAnagram function is defined", () => {
  expect(isAnagram).toBeDefined();
});

test("neutralizeStr function is defined", () => {
  expect(typeof neutralizeStr).toBe("function");
});

// check if neutralizeStr is able to parse strings into the expected format
test("'dragon' should be 'adgnor' when passed into neutralizeStr", () => {
  expect(neutralizeStr("dragon")).toBe("adgnor");
});

test("neutralizeStr should be able to handle whitespace in strings", () => {
  expect(neutralizeStr("hello there boy")).toMatch(/\w/g);
});

// check if isAnagram is able to validate two given strings as anagrams
test("'reed' is an anagram of 'deer'", () => {
  const result = isAnagram("reed", "deer");

  expect(result).toBeTruthy();
});

test("'Dormitory' is an anagram of 'dirty room'", () => {
  const result = isAnagram("Dormitory", "dirty room");

  expect(result).toBeTruthy();
});
