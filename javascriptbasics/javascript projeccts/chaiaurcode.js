console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const but = document.createElement('button')
const div=document.querySelector('.canvas')
but.setAttribute('class','LOGIN')
but.style.color='black'
but.style.backgroundColor='purple'
but.textContent ='LOGIN'
body.appendChild(but)
but.style.padding ='10px'
but.style.borderRadius ='10px'


but.addEventListener('click', () => {
  buttons.forEach(span => {
      span.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log('value of target after click',e);
    console.log('targeted color is',e.target);
    const spStyle = button.getAttribute('style');
    // console.log('style attribute of span',spStyle);
    // console.log(typeof(spStyle));
    // const bgcolor = spStyle['background-color'];
    // console.log('background color is',bgcolor);

    body.setAttribute('style', spStyle);

    changeBodyBackgroundAndTextColor(spStyle);

    // Change text color to be contrasting to the background color
  });
});



// function changeBodyBackgroundAndTextColor(rgbColor) {
//   const body = document.querySelector('body');
//   body.style.backgroundColor = rgbColor;
//   body.style.color = getContrastingColor(rgbColor);
// }

// function getContrastingColor(rgbColor) {
//   const rgbValues = rgbColor.match(/\d+/g).map(Number); // Extract RGB components
//   const [r, g, b] = rgbValues;
  
//   // Calculate the brightness of the color (YIQ formula)
//   const yiq = (r * 299 + g * 587 + b * 114) / 1000;
//   return (yiq <100) ? 'black' : 'white'; // Return black for light colors and white for dark colors
// }

// Example usage:

function changeBodyBackgroundAndTextColor(rgbColor) {
  const body = document.querySelector('body');
  // body.style.backgroundColor = rgbColor;
  body.style.color = getRandomColor();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Example usage:
// changeBodyBackgroundAndTextColor('rgb(222, 111, 229)');
