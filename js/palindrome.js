const isPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;
  let startChar;
  let endChar;

  while (start < end) {
    // get starting and ending characters at each stage
    // of the loop
    startChar = str.charAt(start).toLowerCase();
    endChar = str.charAt(end).toLowerCase();

    // check if starting and ending characters are alphanumeric
    if (isAlphanumeric(startChar) && isAlphanumeric(endChar)) {
      // if they are, check if they are the same
      if (startChar == endChar) {
        start++;
        end--;
      } else {
        return false;
      }
    } else {
      // move to the next character is the former character
      // is not alphanumeric
      if (!isAlphanumeric(start)) {
        start++;
      }
      if (!isAlphanumeric(end)) {
        end--;
      }
    }
  }

  return true;
};

const isAlphanumeric = (char) => {
  if (/[^a-zA-Z0-9]/.test(char)) {
    return false;
  } else {
    return true;
  }
};

// Uncomment the code below to run tests.
// When you uncomment the module.exports statement,
// comment out the export statement below the module.exports
// statement to avoid export conflicts and allow tests
// to run successfully

// module.exports = { isPalindrome, isAlphanumeric };

export { isPalindrome, isAlphanumeric };
