// Have the function to find nearest Fibonacci numbers, that the parameter is array.

// Example: 

// ```jsx
// arr = [15,1,3]
// ```

// then your program should made output = 2

// Because by the above input example [15,1,3], if we add up them it will 15+1+3 = 19,
//  and the nearest fibonacci of 19 is 21, so we need to **add 2 then it can be 21.

let fib = [0, 1];
let tableFibonacci = []
for (i = 2; i <= 20; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    tableFibonacci.push(fib[i])
}

function getNearFibonacci(input) {
    let result
    let data = 0
    for (let i = 0; i < input.length; i ++) {
        data += input[i]
    }
    let tempData
    for (let j = tableFibonacci.length; j >= 0; j--) {
        tempData = tableFibonacci[tableFibonacci.length - 1]
        if (tableFibonacci[j] - data  < tempData) {
            if (tableFibonacci[j] - data  > 0) {
                tempData = tableFibonacci[j] - data
                result = tableFibonacci[j]
            }
        }
    }
    return result
}


console.log(getNearFibonacci([3,3]))