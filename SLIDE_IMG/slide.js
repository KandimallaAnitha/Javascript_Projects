const slides = document.querySelectorAll(".slides img");
let sliderindex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded",initializeslider);

function initializeslider(){
    if(slides.length > 0){
        slides[sliderindex].classList.add("displayslide");
        intervalid = setInterval(nextslide, 5000);
    }
}
function showslide(index){

    if(index >= slides.length ){
        sliderindex = 0;
    }
    else if(index < 0){
        sliderindex = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displayslide")
    });
    slides[sliderindex].classList.add("displayslide");
}

function prevslide(){
    clearInterval(intervalid);
    sliderindex--;
    showslide(sliderindex);
}
function nextslide(){
    sliderindex++;
    showslide(sliderindex);
}