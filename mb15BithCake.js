    function birthdayCakeCandles(candles) {
        let tab=  Math.max(...candles);
        let num={};
        for( let i in candles){
            num[candles[i]]= ++num[candles[i]] || 1;
        }
        return num[tab];    

    }
    console.log(birthdayCakeCandles([4,2,8,5,6,8]));