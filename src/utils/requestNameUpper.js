export const requestNameUpper = (name) => {
  let returnName;

  const replaceName = name.replace("/", "");
  const upperName = replaceName[0].toUpperCase() + replaceName.slice(1);

  returnName = upperName;

  return returnName;
};
