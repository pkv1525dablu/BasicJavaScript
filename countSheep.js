

let  countSheep = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
  ];


   var count = 0;
    for ( i = 0; i < countSheep.length; i++) {
     if (countSheep[i] == true) {
       count += 1;
  
        }
    }                
    console.log(count);

