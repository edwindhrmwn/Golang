// Given an integer n, return a string array answer (1-indexed) where:


// Example Expected Output:


// //Example 1
// Input: n = 3
// Output: ["1","2","Fizz"]

// // Example 2
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// // Example 3
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]



// answer[i] == "FizzBuzz" // if i is divisible by 3 and 5.
// answer[i] == "Fizz" // if i is divisible by 3.
// answer[i] == "Buzz" // if i is divisible by 5.
// answer[i] == i // if non of the above conditions are true.

console.log(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"])

function fizzbuzz(input) {
    let result = []
    const fizzbuzz = "FizzBuzz"
    const fizz = "Fizz"
    const buzz = "Buzz"
    for (let i = 1; i <= input; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(fizzbuzz)
        } else if (i % 3 === 0 ) {
            result.push(fizz)
        } else if (i % 5 === 0) {
            result.push(buzz)
        } else {
            result.push(i)
        }
    }


    return result
}

console.log(fizzbuzz(15))