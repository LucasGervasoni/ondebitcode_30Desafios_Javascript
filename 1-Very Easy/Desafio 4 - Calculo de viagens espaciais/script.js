function square(num) {
  const DigitsArray = num.toString().split(""); // Transforma o número em uma string e depois separa cada um dos caractéres e cria um array.

  const SquaredArray = DigitsArray.map((digit) => Number(digit) ** 2).join(""); // Pega o digit e converte em número e eleva ao quadrado.
  // O MAP cria um novo array a partir de um array anterior.
  // O join converte o array de volta a uma string.
  return Number(SquaredArray); // Tranforma o numero que está em formato de string para number.
}

console.log(square(3514));
console.log(square(94571));
console.log(square(24));
console.log(square(745821698));
