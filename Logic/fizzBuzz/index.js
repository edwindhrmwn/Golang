// Create a function that receive input and will give output:

// Reverse each word of these: 

// jsx
// "I am A Great human"
// into
// "I ma A Taerg namuh"

// note: observe the Capital word behavior*

let data = "I am A Great human"
console.log(data)
console.log("==================")


function reverseWord(input) {
    let word = input.split(" ")
    let result = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i].length === 1) {
            result+= " " + word[i]
        } else {
            let tempData = ""
                for (let j = word[i].length - 1; j >= 0; j--) {
                    tempData += word[i][j]
                }
            result += " " + tempData
        }
    }
    let finalResult = result.slice(1)
    return finalResult
}


console.log(reverseWord(data))