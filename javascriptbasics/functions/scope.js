
addOne(35)// this will work this way we can call function before declaring also
function addOne(num){  // declare function in normal way
        return num+1
}





// addTwo(35) // gives erron if u call function  before declaring
const addTwo = function (num){ // declare function in such a way that it is assign in a variable
    return num+1
}

console.log(addTwo(35))