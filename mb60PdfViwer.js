function designerPdfViewer(h, word) {
    let width=word.length;
  let max=Number.MIN_VALUE;
       for(let i=0;i<word.length;i++){
              let wordNumberFind= word[i].charCodeAt()-'a'.charCodeAt();
                  if(h[wordNumberFind]>max){
                          max=h[wordNumberFind];
                  }
//   console.log(max)
                  
       }
              return max*width;

}
console.log(designerPdfViewer([1 ,3 ,1, 3, 1 ,4, 1, 3, 2, 5, 5, 5, 5, 5, ,5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5],'torn'));