// Radar                 # --> palindrome
// Malam                 # --> palindrome
// Kasur ini rusak       # --> palindrome
// Ibu Ratna antar ubi   # --> palindrome
// Malas                 # --> not palindrome
// Makan nasi goreng     # --> not palindrome
// Balonku ada lima      # --> not palindrome

function checkPalindrome(input) {
    let data = input.toLowerCase()
    let result = ""
    for (let i = data.length - 1; i >= 0; i--) {
        result += data[i]
    }
    if (data === result) {
        return "palindrome"
    } else {
        return "not palindrome"
    }
}


console.log(checkPalindrome("Balonku ada lima"))