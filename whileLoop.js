function prrintWhileLoop(){
   let count = 0;
   let i = 1;
   while(i <=5)
   {
      count += i;
      i++;
   }
   console.log("The sum of numbers from 1 to 5 is:");
   console.log(count);
}

module.exports = prrintWhileLoop;