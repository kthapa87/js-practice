// //array

// // const myArr =[0,1,2,3,4,5,6,5]

// const addTwo = function (num){ // declare function in such a way that it is assign in a variable
//     return num+1
// }

// console.log(addTwo(35))

// // const two =() =>{
// //     console.log('you are welcomed')

// // }

// // two()


// // immediately invoked function expressions(IEFE)
(function chai(){
    console.log('DB connected');
})();
// chai()

(() =>{
    console.log(`DB connected `);
    
})() 

// falsy values
// false, 0,-0,BigInt 0n,null,undefined,NaN

// truthy values
// '0','false, ' ',[],{},fucntion(){}

// checking Object is empty or not 

const obj={}

if(Object.keys(obj).length === 0){
    console.log('object is empty')

}

// nullish coalescing operator ?? used for NULL or Undefined
// example

let val1;

val1 = 5 ?? 10 // check if val1 is recieved as 5 otherwise make the val1 10
val2 = null ?? 20 // check if val2 has null value then make it 20
val3 = undefined ?? function char(){// check if val3 is undefined then it will run a function and assign the value what is return by the function.

    console('if value of val1 is undefined then run the function')
} 

// terniary operator

// syntax condition ? true : false

const iceTeaPrice = 100
let opToBuy
iceTeaPrice <= 80 ? opToBuy = 'YES' : opToBuy = 'NOT'

console.log(`price is ${iceTeaPrice} ${opToBuy} to buy`)