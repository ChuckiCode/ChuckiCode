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




/// Project article
function projAdd (){
    document.getElementById('projMoreBtn').style.display = 'none';
    document.getElementById('projectArticle_extraText').style.display = 'block';
    document.getElementById('projectArticle').style.height = 'fit-content';
}

/// Design article
function designAdd (){
    document.getElementById('designBtn').style.display = 'none';
    document.getElementById('designArticle_extraText').style.display = 'block';
    document.getElementById('designArticle').style.height = 'fit-content';
}

/// Marketing article
function marketAdd (){
    document.getElementById('marketBtn').style.display = 'none';
    document.getElementById('marketArticle_extraText').style.display = 'block';
    document.getElementById('marketingArticle').style.height = 'fit-content';
}