// Var
var x = 20
 function showVar() {
    var x = 23
     console.log(x)
 }

 showVar()

function findX() {
    var x = 1
    {
        var x = 2
    }
    console.log(x)
}

findX()

// Let
// Allows user to set variable limited to the block
function findY() {
    let x = 1
    {
        let x = 2
        console.log(x)
    }
    console.log(x)
}

findY()

// Const
// Allows user to set variable limited to the block + not able to change the value
function findZ() {
    const x = 3
    {
        const x = 4
        console.log(x)
    }
    console.log(x)
}

findZ()