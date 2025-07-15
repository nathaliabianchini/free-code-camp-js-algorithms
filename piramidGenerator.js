/* in this project, you will learn the basics of Javascript and apply those concepts to building a pyramid generator.
   a pyramid generator is a program where you can set the type of character, the count for the pyramid, and the 
   direction of the pyramid. The program will then generate a pyramid based on those inputs. */

const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);