// Find the leap year list of ranges between 2 inputs. 
// Example: user input **1900** and **2020**, so the program will give output:

// 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 
// 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 
// 2008, 2012, 2016, 2020

function leapYear(firstYear, lastYear) {
    let leapyear = lastYear - firstYear
    let tempYear = firstYear
    let result = ""

    for (let i = 0; i < leapyear; i += 4) {
        result += tempYear+4 + ', '
        tempYear = tempYear + 4
    }
    let dataResult = result.slice(0, -2)

    return dataResult
}



console.log(leapYear(1900, 2020))