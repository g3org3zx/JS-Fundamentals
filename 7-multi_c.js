const timesStr = process.argv[2];
const timesNum = parseInt(timesStr);
const text = "C is fun";

if (isNaN(timesNum)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < timesNum) {
    console.log(text);
    i++;
  }
}
