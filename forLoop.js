function printForLoop() {
   let result = 0;
   for(let i = 1; i <= 5; i++)
   {
      result += i;
   }
   console.log("The sum of numbers from 1 to 5 is:");
   console.log(result);
}

module.exports = printForLoop;