function printIfElse(){
   let number = 7;
   console.log("If-Else Statement:");

   if(number % 2 === 0){
      console.log(number + " is an even number.");
   }
   else{
      console.log(number + " is an odd number.");
   }
}

module.exports = printIfElse;  