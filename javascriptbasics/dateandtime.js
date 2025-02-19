// let myDate =new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.getFullYear())
// console.log(myDate.getTimezoneOffset())
// console.log(myDate.getDate())

 let timeStamp = new Date()

 console.log(timeStamp)
 console.log(timeStamp.getTime())
 console.log(Math.floor((Date.now()/1000)/3600))


 let newDate = new Date()

 console.log(newDate.getMonth())// month starts with 0 i.e 0=jan,1=feb,2=march and so on...

 let localstr = newDate.toLocaleString('default',{
    weekday:"long",
    dayPeriod:"long",
    era:"long",
    timeZoneName:"long",
    year:"2-digit",
 })
console.log(localstr)

