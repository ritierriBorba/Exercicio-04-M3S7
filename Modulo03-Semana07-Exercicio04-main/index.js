let x = 17;
let y = 21;
let z = 42;

// 1 
if (x < y && y < z) {
    console.log(true)
} else {
    console.log(false)
}

// 2
if (x != z || y > z) {
    console.log(true)
} else {
    console.log(false)
}

// 3
if (z == 2 * (y)) {
    console.log(true)
} else {
    console.log(false)
}

// 4
if ((x + y) > z) {
    console.log(true)
} else {
    console.log(false)
}

// 5
if ((Math.pow(x, 2) + Math.pow(y, 2)) > Math.pow(z, 2)) {
    console.log(true)
} else {
    console.log(false)
}