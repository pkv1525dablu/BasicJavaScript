  function save(x,y,z){           //  x= num of kaidi,  y= num of sweets, z= start distribution positin
    return ((z+y-2)%x)+1;
  }
  console.log(save(4,6,2))