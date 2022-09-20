let num=[1,2,3,4.];

console.log(num.length);     //  ans= 4
console.log(num.slice(1,3))


//
let num1=[1,2,3,4.];
console.log(num1.length);       
//

let numb=[1,2,4,8,20]
 console.log(numb[1])    //  find  elemnt  given positin  = 2
   numb[2] ="piyush";   //  add element at given position 

console.log(numb.indexOf(2))
numb.push(25);    // add elemeny last
numb.unshift(4);    //  add element fisrt

numb.pop();      // remove  element  last
numb.shift();       //  remove element first
 
console.log(numb);
numb.splice(2,3);       //     remove element   from 2 position   (3 element remove)
      num2=[5,7,3];       //
numb= numb.concat(num2);
 console.log(numb)

 //   boject    => object me kuchh bhi rakth sakte hai   num, string, ....

    let obj={ num:20, 
 name:"piyush",
 marks: [10,20,30,]
    }
            
console.log(obj);
console.log(obj.num);
console.log(obj['num']);
console.log(obj.marks);