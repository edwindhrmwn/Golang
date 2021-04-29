let jsonData = [
    {
      "inventory_id": 9382,
      "name": "Brown Chair",
      "type": "furniture",
      "tags": [
        "chair",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190471,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 9380,
      "name": "Big Desk",
      "type": "furniture",
      "tags": [
        "desk",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190642,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 2932,
      "name": "LG Monitor 50 inch",
      "type": "electronic",
      "tags": [
        "monitor"
      ],
      "purchased_at": 1579017842,
      "placement": {
        "room_id": 3,
        "name": "Lavender"
      }
    },
    {
      "inventory_id": 232,
      "name": "Sharp Pendingin Ruangan 2PK",
      "type": "electronic",
      "tags": [
        "ac"
      ],
      "purchased_at": 1578931442,
      "placement": {
        "room_id": 5,
        "name": "Dhanapala"
      }
    },
    {
      "inventory_id": 9382,
      "name": "Alat Makan",
      "type": "tableware",
      "tags": [
        "spoon",
        "fork",
        "tableware"
      ],
      "purchased_at": 1578672242,
      "placement": {
        "room_id": 10,
        "name": "Rajawali"
      }
    }
  ]

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