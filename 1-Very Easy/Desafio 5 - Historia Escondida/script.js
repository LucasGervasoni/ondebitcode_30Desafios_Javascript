function highestLetter(str) {
  const sortedArray = str.toLowerCase().split("").sort();
  return sortedArray[sortedArray.length - 1]; // Retorna a maior letra.
}

console.log(highestLetter("Lorem ipsum dolore sec avanti"));
console.log(highestLetter("Hello"));
console.log(highestLetter("May the force be with you"));
console.log(highestLetter("It s over nine thousand"));
