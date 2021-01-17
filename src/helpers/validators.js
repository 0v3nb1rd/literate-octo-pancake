export const required = (val) => {
  if (val) return undefined;
  return 'Field is empty :(';
};
export const maxLength = (maxLength) => {
  return (val) => {
    if (val.length > maxLength) return `Max length must be ${maxLength}`;
    return undefined;
  };
};

// export const maxLength50 = (val) => {
//   if (val.length > 50) return 'Max length is 50';
//   return undefined;
// };
