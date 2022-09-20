function  numberOfValleys(n, str) {
    let numberOfValleys = 0;
  let altitude = 0;
    
  for (let i = 0;  i < n; i++) {
          if( str[i]==="U" ){
              altitude++;
             
          if (altitude===0){
              numberOfValleys++;
          }
          } else {
              altitude--;
          }
      }
          return numberOfValleys;
      }
console.log('Number of valleys Gary traversed -->',  numberOfValleys(7, 'DDUUUDD'));

//
function countingValleys(n, str) {
    let valleyCounter = 0; // To count the valleys
    let altitude = 0; // To increment altitude in every "U" char, otherwise decrement the altitude

    // To go through every char in the string
    for (let i = 0;  i < n; i++) {
        let char = str.charAt(i); // To get a char in every cycle

        // Because we are just interested "U" char
        if (char === "U") { // check if the current char in the cycle is equal to "U"

            altitude++; // Increment the altitude if the char is "U"

            if (altitude === 0) { // This is the "key" when altitude is equal to 0 means that 1 valley was completed
                valleyCounter++; // Means that a valley was completed an increment
            }

        } else { // If is other char that not is "U" 
            altitude --; // then the altitude will be decremented
        }
    }

    // Finally when for cycle ends, return the valleyCounter
    return valleyCounter;
}

console.log('Number of valleys Gary traversed -->', countingValleys(7, 'DDUUUDD'));