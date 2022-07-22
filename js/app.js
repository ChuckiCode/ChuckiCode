"use strict";

const btnMore = document.querySelectorAll('.moreBtn');
const cards = document.querySelectorAll('.cordsBox');
for(let i = 0; i < btnMore.length; i++){
  btnMore[i].addEventListener('click', function(){
    // console.log(`pushed button number ${i + 1}`)
    let userDes = confirm('Apoligies, this button is still under development. Would you like to contact the developer?');
    if(userDes === true){
      window.location.href = '../pages/conta.html';
    } else{
      window.location.href = '../index.html';
    }
    // console.log(cards[i].firstChild)
  })
}