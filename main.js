// Practice: CHICKENMONKEY
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
    console.log("chickenMonkey") // chickenmonkey will appear at every number divisible by 5 and 7
}
 else if (currentNumber % 5 === 0) {
      console.log("chicken") // Chicken will appear at every multiple of 5
  }
  else if (currentNumber % 7 === 0) {
    console.log("monkey") // Monkey will appear at every multiple of 7
}
  else {
    console.log(currentNumber);
  }
}
// This was fun!