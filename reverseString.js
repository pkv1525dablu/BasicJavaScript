// function reverseString(str){
//     let string="";
//     for(i=str.length-1;i>=0;i--){
//              string=string+str[i];
//     }
//        console.log(string);
// }
// reverseString("hello");

// // //     m2  wmethod
// let str=("hello");
// let string="";
// for(i=str.length-1;i>=0;i--){
//         string=string+str[i];
// }
//   console.log(string);

//  
function reverseString(str){
        return str.split("").reverse().join("")      //       my  name is  ==   si eman ym        ("")     parethesis no space
        return str.split(" ").reverse().join(" ")     //    my name is ==   is name my             (" ")   paranthesis withspace
}
console.log(reverseString("hello my name is"));
// //
// function reverseString(str){
//         let  splitString=str.split("");
//          let  reverseArray=splitString.reverse();
//           let  joinArray=reverseArray.join("");
//         return joinArray;
// }
//     console.log(reverseString("hello"));