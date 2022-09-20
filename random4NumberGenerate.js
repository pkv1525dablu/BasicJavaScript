var color;

function Ghost() {
  console.log(this)
 this.color=["white","yellow","purple","red"][Math.floor(Math.random() *4)];   // 4 is used bcz max 4 random digit  generate ho.
  //return color=["white","yellow","purple","red"][Math.floor(Math.random() *4)];
}
console.log( Ghost())
console.log(this.color)
