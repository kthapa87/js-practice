// function sayMyNanumqme(user,address)// user and address are recieved as parameters
// {

//     console.log(`willkommen ${user} bei kirsch fahrschule´${address}`)
// }

// let user = 'kamal thapa'

// let address = 'kleyer strasse'
// sayMyName(user,address)// user and address are passed to function as arguments
// // if user does not pass any argum then username will be kamal byde
// fault
// function loginUsrMsg(username = 'kamal')
// {

//     return`${username}just logged in`
// }

// let ret =loginUsrMsg()
// console.log(ret)


function calCarPrize(n1,n2,...num1){// can take multiple arguments with the help of ... 3 dots
    return num1

}

console.log(calCarPrize(200,400,600,120))

const userName ={
    name:'kamal thapa',
    city: 'frankfurt',
    country:'germany'
}

function userDetails(usdt){

    console.log(`welcome ${usdt.name}  to the ${usdt.city} you live in ${usdt.country}`);
    
}

// userDetails(userName)

userDetails(
    {
    name:'kamal thapa',
    city: 'frankfurt',
    country:'germany'
    }
)


const myNewArray =[200,400,600,120,320]

function newArray(arrayValue){

    return arrayValue[3]
}

// const retVal = newArray(myNewArray)// passing arguments as an arra variable
const retVal = newArray([200,400,600,120,330])// passing complete array itself as an argument

console.log(retVal)