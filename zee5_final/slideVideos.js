var  arrows = document.querySelectorAll(".next2");
var  movieLists = document.querySelectorAll(".card_container");



arrows.forEach((elem, i) => {    

  i
  
  var itemNumber = movieLists[i].querySelectorAll("img").length;
  var clickCounter = 0;
  if (window.length > 400) {
    
  }
  elem.addEventListener("click", function () {

    const ratio = Math.ceil(window.innerWidth / 220);
    clickCounter++;

    if (itemNumber - (5 + clickCounter)+(5-ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value -260
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  
 

  });

  
});