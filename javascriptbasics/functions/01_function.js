function sayMyName(user,address)// user and address are recieved as parameters
{

    console.log(`willkommen ${user} bei kirsch fahrschule´${address}`)
}

let user = 'kamal thapa'

let address = 'kleyer strasse'
sayMyName(user,address)// user and address are passed to function as arguments
// if user does not pass any argument then username will be kamal bydefault
function loginUsrMsg(username = 'kamal')
{

    return`${username}just logged in`
}

let ret =loginUsrMsg()
console.log(ret)