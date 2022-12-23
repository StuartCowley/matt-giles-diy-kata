const joinNames = (namesObj) => {
  const joinNamesArray = namesObj.map((nameList) => `${nameList.name}`);
  console.log(joinNamesArray);
  const array = joinNamesArray.reduce((acc, curr, index) => {
    if (index < joinNamesArray.length - 1) {
      return `${acc}, ${curr}`;
    }
    return `${acc} & ${curr}`;
  });
  console.log(array);
  return array;
};

module.exports = joinNames;
