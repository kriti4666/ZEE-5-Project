const  carousel = document.querySelector('.carousel');
let sliders = []

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;

    }

    //creating DOM

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');

    imgElement.appendChild(document.createTextNode(''));

    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up image

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = 'slider';


    sliders.push(slide);

    //adding slidding effect

    if(sliders.length){
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length -2)}% - ${30 * (sliders.length - 2)}px)`;
}
}

for(let i = 0; i < 3; i++){
    createSlide();
}


setInterval(() => {
    createSlide();
},3000);




// create card  Slide();



var  arrows = document.querySelectorAll(".nxt-btn");
var  movieLists = document.querySelectorAll(".card_container");



arrows.forEach((elem, i) => {    

  
  var itemNumber = movieLists[i].querySelectorAll("img").length;
  var clickCounter = 0;
  if (window.length > 400) {
    
  }
  elem.addEventListener("click", function () {

    const ratio = Math.ceil(window.innerWidth / 300);
    clickCounter++;

    if (itemNumber - (5 + clickCounter)+(5-ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value -360
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  
 

  });

  
});
















