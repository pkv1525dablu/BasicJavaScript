process.stdin.setEncoding("utf-8");

process.stdin.on("data",  (input) => {
  console.log(input);
  for (i = 0; i < parseInt(input); i++) {
    console.log(i);
  }
});
