const sizeStr = process.argv[2];
const size = parseInt(sizeStr);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < size) {
    console.log("X".repeat(size));
    i++;
  }
}
