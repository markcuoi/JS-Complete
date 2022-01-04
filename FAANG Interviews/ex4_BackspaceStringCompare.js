const buildString = function (string) {
  const buildArray = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== "#") buildArray.push(string[p]);
    else buildArray.pop();
  }
  return buildArray;
};

const breakSpaceCompare = (S, T) => {
  const finalS = buildString(S);
  const finalT = buildString(T);

  if (finalS.length !== finalT.length) return false;
  else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) return false;
    }
  }
  return true;
};
