// let moviediv = document.getElementById("movies");

let id;

// assemble in one function
async function main() {
  let data = await searchmovie();
  appendmovies(data);
}

async function searchmovie() {
  //https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om

  try {
    let query = document.getElementById("search").value;

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=5807364a&s=${query}`
    );

    const ani = await res.json();

    const movies = ani.Search;

    return movies;

    // console.log(ani.Search)
    // localStorage.setItem("getData",JSON.stringify("ani.Search"))
  } catch (err) {
    console.log(err);
  }
}

function appendmovies(data) {
  let moviediv = document.getElementById("movies");

  data.forEach((ele) => {
    let p = document.createElement("p");
    p.innerText = ele.Title;
    // p.addEventListener("click", function () {
    //   titlefunction(ele);
    // });
    p.addEventListener("click", function () {
      displayfunction(ele);
    });

    moviediv.append(p);
  });
}

// debouncing
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
}

function displayfunction(data) {
  window.location.href = "kanad/scripts/deb.html";

  console.log(window.location)
  
  if(location.toString().includes("deb.html"))
  {
    location.reload();
  }

  localStorage.setItem("getData", JSON.stringify(data));
}
