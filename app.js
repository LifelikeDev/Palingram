const isAnagram = (str1, str2) => {
  return neutralizeStr(str1) === neutralizeStr(str2);
};

const neutralizeStr = () => {
  return str.replace(/^\w/g, "").toLowerCase().split("").sort().join("");
};

module.exports = {
  isAnagram,
  neutralizeStr,
};
