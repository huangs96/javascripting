let total = 0;
let limit = 10;
//second variable set to be able to check certain conditions, i < limit is the same as i < 10
for (let i = 0; i < limit; i++){
  //loop with 10 being exit for loop
  total += i;
  if(total>limit){
    break;
  }
  
}

console.log(total);