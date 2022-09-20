function gradingStudents(grades) {

        let result=[];
  for (let i in grades) {
    if (grades[i] < 38) {
      result.push (grades[i]);
    } else if (grades[i] % 5 >= 3) {
      result.push (grades[i] + (5-grades[i] % 5));
    } else if (grades[i] % 5 <= 2) {
       result.push(grades[i]);
    }
  }
  return result;
}
console.log(gradingStudents([42,33,39,73,74]));
