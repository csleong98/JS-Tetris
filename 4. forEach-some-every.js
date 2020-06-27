var first = ['Venus', 'Mercury', 'Earth', 'Mars', 'Saturn']

// forEach
first.forEach(function(first) {
    console.log(first)
})

// some
if(first.some(first => first === 'Venus')) {
    console.log("It's Venus")
} else {
    console.log("Not Venus")
}

// every
if(first.every((currentValue) => currentValue.length < 7)) {
    console.log("less than 10")
} else {
    console.log("more than 10")
}