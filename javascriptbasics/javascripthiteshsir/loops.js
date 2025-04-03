// // let so,ele;
// // fo,r (let i = 0; i < 10; i++) {
// //     // const element = i;
// //     for (let j = 0; j < 5; j += 2) {
// //         ele = j;
// //         console.log(ele)
        
// //     }
// //     // so = element == ele ? 'TRUE' : 'False'
// // }

// // console.log(so)


// // for(i=1;i<10;i++){
// //     console.log('hallo')
// //   
// //   for(j=1;j<2;j++){
// //         console.log(i)
// //     }
// // }

// const map = new Map() // map are used to store unique values only.we can give duplicate value in map

// map.set('NP','Nepal')
// map.set('IN','India')
// map.set('GB','Germany')

// for (const [cou,value] of map) {
//     console.log(cou,':-',value)
// }

// const prog=['js','python','ruby','c++','java','HTML5','CSS','Flutter']

// for(const key in prog){
//     console.log(prog[key])
// }

// const progLang=['js','python','ruby','c++','java','HTML5','SS','Flutter']

// progLang.forEach( function (arrItem){
//     console.log(arrItem)
// })
// // callback function
// // A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array
// progLang.forEach( (arrItem,index,progLang) => {// forEach has three parameters first is the single value, second is the index of the value and third is the complete array in which foreach is applied 
                
//     console.log('foreach',arrItem)
// })


const objMob = [
    {
        korea:'Samsung',
        Model:'Samsung Ultra 25',
        price:'1200$',
        RAM:'16GB',
        Speicher:'512GB'
        
    },
    {
        USA:'Apple',
        Model:'Iphone 16 Max',
        price:'1450$',
        RAM:'16GB',
        speicher:'256GB'
    },
    {
        China:'Xiaomi',
        Model:'Xiaomi 15 Pro',
        price:'990$',
        RAM:'32GB',
        speicher:'512GB'
    }
]
objMob.forEach((item)=>{
    console.log(item.Model.length)
})

