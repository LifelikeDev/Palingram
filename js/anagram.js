const isAnagram = (str1, str2) => {
  return neutralizeStr(str1) === neutralizeStr(str2);
};

const neutralizeStr = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

// Uncomment the code below to run tests.
// When you uncomment the module.exports statement,
// comment out the export statement below the module.exports
// statement to avoid export conflicts and allow tests
// to run successfully

module.exports = { isAnagram, neutralizeStr };

// export { isAnagram, neutralizeStr };
