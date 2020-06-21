// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than once in the
// input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.

function countDuplicate(chars) {
  let charsArray = [...chars.toLowerCase()];
  const count = 1;
  const charsObject = {};
  for (let char of charsArray) {
    charsObject[char]
      ? (charsObject[char] += count)
      : (charsObject[char] = count);
  }
  for (let [key, value] of Object.entries(charsObject)) {
    const result =
      value > 1 ? console.log(`The ${key} repeats ${value} times`) : "";
  }
}
