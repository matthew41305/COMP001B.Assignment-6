// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

// Define a custom error class called MultiplicatorUnitFailure that extends the built-in Error class
class MultiplicatorUnitFailure extends Error {}

// Function that attempts to multiply two numbers
function primitiveMultiply(a, b) {
  // 20% of the time, return the product of the two numbers
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    // 80% of the time, throw a MultiplicatorUnitFailure exception
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

// Function that attempts to reliably multiply two numbers using the primitiveMultiply function
function reliableMultiply(a, b) {
  // Enter an infinite loop to keep trying until the multiplication succeeds
  while (true) {
    try {
      // Attempt to multiply the numbers
      return primitiveMultiply(a, b);
    } catch (e) {
      // If a MultiplicatorUnitFailure exception is caught, ignore it and try again
      if (!(e instanceof MultiplicatorUnitFailure)) {
        // If any other type of exception is caught, rethrow it
        throw e;
      }
    }
  }
}

// Test the reliableMultiply function with the numbers 9 and 9
console.log(reliableMultiply(9, 9)); // outputs 81
