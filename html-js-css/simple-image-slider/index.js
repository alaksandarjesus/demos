const slider = document.getElementById("slider"); // capture slider element
const slideIndex = document.getElementById("slideIndex"); // to display  current slide index
const sliderlis = slider.querySelectorAll("li"); // capture all li elements
const sliderlisLength = sliderlis.length; // calculate li elements lis
const sliderDuration = 2000; // set slider duration

let sliderCurrentIndex = 0; // set inital value to 0
slideIndex.innerText = sliderCurrentIndex; // set current visible slide index

setInterval(function(){ // execute a function after slider duration time.
sliderCurrentIndex++; // increment current index
if(sliderCurrentIndex >= sliderlisLength){ //verify if it is the last image
sliderCurrentIndex = 0; // if true, reset current index to 0 (first image)
}
sliderlis.forEach(function(element, index){ // run a loop on all image lis
  element.style.display = 'none'; // set all to none by default
	if(index === sliderCurrentIndex){ // if current index equal image index
    element.style.display = 'block'; //display block of image
  }
});
slideIndex.innerText = sliderCurrentIndex; // update index value for verification
}, sliderDuration);

