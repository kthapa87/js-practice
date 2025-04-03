// // // const mySym = Symbol('keys')

// // // let person = {
// // //     firstName: "John",
// // //     lastName: "Doe",
// // //     [mySym]:'keysone',
// // //     age: 30,
// // //     occupation: "Developer",
// // //     greet: function() {
// // //         const num1 =12,num2=24
// // //         let avg =(num1+ num2)/2
// // //         console.log(avg);
// // //     //   console.log("Hello, my name is " + this.firstName + " " + this.lastName);
// // //     }
// // //   };

// // //   console.log('the symbol is ',person[mySym]);
// // //   console.log(typeof(mySym))
  
// // //   // Accessing object properties
// // //   console.l,og(pers.firstName); // Output: John
// // //   console.log(person.age); // Output: 30
  
// // //   // Calling object methods
// // //   person.greet(); // Output: Hello, my name is John Doe
  
// // //   Object.freeze(person)

// // //   person.age
// // // =55
// // //   console.log(person.age)
// // //   console.log(person)

// // // objects part 2

// // // const tinderUser= new Object()

// // const tinderUser = {}

// // tinderUser.id='1234kk'
// // tinderUser.name='kamal'
// // tinderUser.isLogIN=false

// // // console.log(tinderUser);

// // const regUser ={
// // email:'kamalt@ gmail.com',
// // continent:{
// //     Asia:{
// //         country:'german',
// //         state:{
// //             name:'hessen',
// //             city:'frankfurt',
// //             postcode:60329,
// //             street:'mosel',
// //             hsNr:46
// //         }
// //     }
// // }
// // }
// // console.log(regUser.continent.Asia?.state.street)


// const obj1 ={
//     1:'a',
//     2:'b'
// }

// const obj2 ={
//     3:'a',
//     4:'b'
// }
// const obj3 ={
//     1:'c',
//     2:'d'
// }


// // const obj5 ={obj1,obj2}

// const obj4 ={...obj1, ...obj2, ...obj3}
// console.log(obj4)


// console.log();


const tinderUser={
    name:{
        vorname : 'kamal',
        middlename:'bahadur',
        nachname:'thapa'
    },
    email : 'kamal234@microsoft.de',
    sex:'male',
    maritalSts:'married',
    DOB:'30.01.1995',
    address:{
        bundesland:'hessen',
        stadt:'frankfurt',
        strasse:'moselstrasse',
        hsNr:'46'
}
}


const address2={
        bundesland:'hessen',
        stadt:'frankfurt',
        strasse:'moselstrasse',
        hsNr:'46'
    }

// console.log(tinderUser)

console.log(Object.keys(tinderUser.address))
console.log(Object.values(tinderUser.address))

console.log(tinderUser.hasOwnProperty('city'))// check that the object tinderuser has property city or not and return boolean value
console.log(address2.hasOwnProperty('stadt'));// return true
