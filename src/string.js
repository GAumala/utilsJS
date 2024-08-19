export const isValidECUPhone = (input) =>
  typeof input === "string" &&
  input.length === 10 &&
  !!input.match(/09[0-9]+/g);


