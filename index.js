//1
function sumOfThreeAndFive(){
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0){
           sum += i;
      }
  }
    return sum;
}

console.log(sumOfThreeAndFive());

function greaterNum(num1, num2){
    if (typeof num1 === "number" && typeof num2 === "number"){
        if (num1 > num2){
            return num1;
        } else if (num2 > num1) {
            return num2;
        } else if (num1 === num2) {
            return "both integers are equal";
        }
    } else {
        return null;
    } 
}

console.log(greaterNum(1, 2));

function oddAndEvenInFifteen(){
  for (let i = 0; i <= 15; i++){
      if (i % 2 === 0){
          console.log(`${i} is odd`)
      } else if (i % 3 === 0) {
          console.log(`${i} is even`)
      }
  }
}
oddAndEvenInFifteen()

function sortThreeNums(){
  
}






