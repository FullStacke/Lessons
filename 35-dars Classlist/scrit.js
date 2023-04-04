
const btns = document.querySelectorAll('button');

//  classList.length --> elementdagi klastlarni olib beradi
// console.log(btns[0].classList.length);



//  classList.item --> elementdagi kilastlarni indexi orqali olib beradi
// console.log(btns[0].classList.item(1));   


//  clas qo'shish va o'chirish
// btns[1].classList.add('blue', 'some');  // add --> clas qo'shadi
// btns[0].classList.remove('blue');  // remove --> clasni o'chiradi

// btns[0].classList.toggle('blue');  // toggle --> elementda clas bo'lsa yo'q qiladi || Yo'q bo'lsa bor qiladi



// btns[0].classList.add('red')
// if(btns[0].classList.contains('red')) {
//   console.log('yeap');
// }



btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red')
  // } else {
  //   btns[1].classList.remove('red')
  // }

  btns[1].classList.toggle('red');
})


