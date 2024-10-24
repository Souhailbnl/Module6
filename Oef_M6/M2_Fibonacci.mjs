 
let fibonacci = [0, 1];
 
 
while (fibonacci.length < 10)
{
  let next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(next);
}
 
console.log(fibonacci);
 
 