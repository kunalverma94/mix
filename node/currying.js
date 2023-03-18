function multiply(x,y) {
    console.log(x*y);
}


function multiply2(y) {
    return function () {
        multiply(2,y)
    }
}

multiply2(5)()