function str(s){
    let comp="abcdefghijklmnopqrstuvwxyz"
    let s1=s.replace(/\s/g,'');
      let s2=s1.toLowerCase().split("");
       let s3=([...new Set(s2)]).sort().join('');
    
     if(s3==comp){
        return  'pangram';
     }
        return 'not pangram';
  }
 // console.log(str("abcdefghijklmnopqrstuvwxyz"))
  console.log(str("We promptly judged antique ivory buckles for the next prize"))
  console.log(str("abcdefghijklmnopdjkfsklgklqrstuvwxyz"))
    
//  m2
// function str(s){
//      let comp='abcdefghijklmnopqrstuvwxys';
//          let s1=s.replace(/\s/g,'');
//      let s2=s1.toLowerCase();
//      let s3=s2.split('');   // conver into array
//      let s4=[...new Set(s2)];   // duplicate remove
//      let s5=s3.sort();  
//      let s6=s4.join('');    // conver into string
//     if(comp==s6){
//         return 'pangram'
//     }
//     return "no pangram";
// }
// console.log(str('XJSHAJKDJKJ'))