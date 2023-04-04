
const btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {

// })
let timerId;
let i;

function myAnimation() {
  const car = document.querySelector('.car');
  let pos = 0;

  const timerId = setInterval(frame, 10)

function frame() {
  if (pos === 700) {
    clearInterval(timerId);
  } else {
    // console.log(pos);
    pos++;
    car.style.left = pos + 'px';
  }
}
}


btn.addEventListener('click', myAnimation);





// btn.addEventListener('click', () => {
//   // timerId = setTimeout(logger, 1000);
//   timerId = setInterval(logger, 500)
// })

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId)
//   }
//   console.log('set time out');
//   i++;
// }



// let id = setTimeout(function log() {
//   console.log('hello log');
//   id = setTimeout(log, 500);
// }, 500)

























// 'use strict';

// const btn = document.querySelector('#btn');

// function myAnimation() {
//   const car = document.querySelector('.car');
//   let pos = 0;

//   const timerId = setInterval(frame, 10);

//   function frame() {
//     if (pos === 700) {
//       clearInterval(timerId);
//     } else {
//       pos++;
//       car.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);
