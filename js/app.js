"use strict";


//////////////////////////////Side menu///////////////////////////////////////////////////
let openMenu = false; 

function activateMenu(){
let menu = document.getElementById('sideMnu');
menu.style.display = 'block';

openMenu = true;
if(openMenu === true){
    menu.addEventListener('click', function(){
        menu.style.display = 'none';
    });
}};

const moreBtns = document.querySelectorAll('.moreBtn');
const asideBlock = document.querySelectorAll('.asideNotActivated');
const progectWrapers = document.querySelectorAll('.projContainer');
for(let i = 0; i < moreBtns.length; i++){
  moreBtns[i].addEventListener('click', function(){
    moreBtns[i].style.display = 'none';
    asideBlock[i].classList.add('asideActivated');
    asideBlock[i].classList.remove('asideNotActivated');
    progectWrapers[i].style.height = 'fit-content';
  })
}