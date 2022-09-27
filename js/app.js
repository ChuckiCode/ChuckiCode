"use strict";

let slideIndex = 0;

function startSlide (){
    const slide = document.querySelectorAll('.designs_responsive');
    let i;
    for(i=0;i<slide.length;i++){
        slide[i].style.display = 'none';
    }

    slideIndex++;
    if(slideIndex > slide.length){slideIndex = 1}
    slide[slideIndex-1].style.display = 'block';
    setTimeout(startSlide, 3000);

}

startSlide();