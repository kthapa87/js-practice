// const api_key ='ec775e6eb282717962c22c87'

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector(".form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");
// let newOption
// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     newOption= document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// let currfrom= newOption


// const updateExchangeRate = async () => {
//   let currfrom= newOption;
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
// console.log('country from',currfrom)
//   const BASE_URL =`https://v6.exchangerate-api.com/v6/${api_key}/latest/${currfrom}`;
//   let response = await fetch(BASE_URL);
//   let data = await response.json();
//   console.log('data from exchange',data)
//   let rate = data[toCurr.value];
//   console.log('exchange rate value of the selected country',rate)

//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });


const api_key ='ec775e6eb282717962c22c87'
const BASE_URL =`https://v6.exchangerate-api.com/v6/${api_key}/latest`; 
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let recAmount=document.querySelector('#msg')
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const counFrom = fromCurr.value;
  console.log('country from',counFrom)
  const counConv=toCurr.value
  console.log(' selected country for rate is ',counConv)
  const URL = `${BASE_URL}/${fromCurr.value}`
  let response = await fetch(URL);
  let data = await response.json();
  console.log('data from the exchange ',data)
  let rate = data.conversion_rates;
  console.log('excahnge rate for the selected country is ',rate);

  for (const key in rate) {
    if (key.includes(counConv)) {
        // if (amtVal.value) {
            
            
            const rat = rate[key] * amtVal;
            console.log('conversion rate is ',rat)
            
            recAmount.value= Math.floor(rat);
            // sendAmount.innerHTML = ' '
        // }
        //  else if (recAmount.value) {
            
        //     const totlamt = recAmount.value / rate[key];
        //     sendAmount.value = Math.floor(totlamt);
            
        // }
        exch_rate =rate[key]
        console.log('rate for the selected country is ',exch_rate)
        // const li = document.createElement('li');
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = `${day}/${month}/${year}`;
        const hrs =today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        const time = `${hrs}:${minutes}:${seconds}`;




        recAmount.innerHTML = `${date} :  ${time} :  ${amtVal} ${counFrom} = ${recAmount.value} ${counConv}`;
        // ul.appendChild(li);
        // li.style.color = 'red';
        // // recAmount.value= ''
        // sendAmount.value= ''
    }
    
}
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});