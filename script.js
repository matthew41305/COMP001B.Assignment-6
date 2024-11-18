// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}
// the function that multiplies the two numbers
function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) { // 20 percent chance that the two numbers will get multiplied, the other 80 percent raises an exception
    return a * b;
  } else {
    //80 percent of the time it will through MuliplicationUnitFailure Exception aka Klunk
    throw new MultiplicatorUnitFailure("Klunk");
  }
}
// uses function reliableMultiply for variables a & b
function reliableMultiply(a, b) {
  // Your code here.
  // use while function so it continues to loop and keeps trying to multiply the numbers until it succeeds
  while (true) {
    try {
      // here it tries to multiply the numbers
      return primitiveMultiply(a, b);
    } catch (e) {
      // If a the MultiplicatorUnitFailure exception is caught, ignores it and tries again
      if (!(e instanceof MultiplactorUnitFailure)) {
        // any other exception that is caught rethrows it
        throw e;
      }
    }
  }
}
// this tests reliableMultiply with the numbers 9 , 9
console.log(relatibleMultiply(9, 9)); // outputs 81