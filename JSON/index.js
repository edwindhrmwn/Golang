let jsonData = require('./data.json')
//   1. Find items in the Meeting Room.
console.log("================= 1 ======================")

let result = []
for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].placement.name == "Meeting Room") {
        result.push(jsonData[i])
    }
}
console.log(result)

//   2. Find all electronic devices.
console.log("================= 2 ======================")
let result2 = []
for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].type == "electronic") {
        result2.push(jsonData[i])
    }
}
console.log(result2)

//   3. Find all the furniture.
console.log("================= 3 ======================")

let result3 = []
for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].type == "furniture") {
        result3.push(jsonData[i])
    }
}
console.log(result3)

//   4. Find all items were purchased on 16 Januari 2020.
console.log("================= 4 ======================")

let result4 = []
for (let i = 0; i < jsonData.length; i++) {
    let dateInput = new Date(jsonData[i].purchased_at).toString()
    let date = dateInput.slice(4, 15)
    console.log(date, "====")
    if (date == "Jan 19 1970") {
        result4.push(jsonData[i])
    }
}
console.log(result4)

//   5. Find all items with brown color.
console.log("================= 5 ======================")

let result5 = []
for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].tags.length == 1) {
        if (jsonData[i].tags[0] == "brown") {
            result5.push(jsonData[i])
        }
    } else {
        for (let j = 0; j < jsonData[i].tags.length; j++) {
            if (jsonData[i].tags[j] == "brown") {
                result5.push(jsonData[i])
            }
        }
    }
}
console.log(result5)