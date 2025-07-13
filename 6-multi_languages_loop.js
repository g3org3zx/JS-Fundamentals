const firstLine = ["C is fun", "Python is cool", "JavaScript is amazing"];
let result = "";

for (let i = 0; i < firstLine.length; i++) {
  result += firstLine[i] + "\n";
}

// Remove the last newline character
result = result.slice(0, -1);

console.log(result);
