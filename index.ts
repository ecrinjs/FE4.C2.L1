//EXERCİSE 1

var rows = prompt("How many rows for your multiplication table?");
var cols = prompt("How many columns for your multiplication table?");
if (rows == "" || rows == null) var rows: string | null;
console.log(rows, null, 10);
if (cols == "" || cols == null) var cols: string | null;
console.log(cols, null, 10);
createTable(rows, cols);
function createTable(rows, cols) {
  var j = 1;
  var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
  for (let i = 1; i <= rows; i++) {
    output = output + "<tr>";
    while (j <= cols) {
      output = output + "<td>" + i * j + "</td>";
      j = j + 1;
    }
    output = output + "</tr>";
    j = 1;
  }
  output = output + "</table>";
  document.write(output);
}
