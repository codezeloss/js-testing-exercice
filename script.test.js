// const sum = require("./sum");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

//
const capitalize = require("./capitalize");

test("takes a string and returns it with teh first character capitalized", () => {
  expect(capitalize("adam")).toBe("Adam");
});
