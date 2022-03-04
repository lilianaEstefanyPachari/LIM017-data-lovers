import { example } from "./data.js";
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from "./data/ghibli/ghibli.js";

//number of movies
const numberOfMovies = data.films.length;
document.getElementById("numberOfMovies").innerHTML =
  numberOfMovies + " PELICULAS";

let movies2 = data.films;

//data
for (let i of movies2) {
  const divImgMovie = document.createElement("div");
  const groupMovie = document.createElement("div");
  const imgMovie = document.createElement("img");
  let nameMovie = document.createElement("p");
  let yearMovie = document.createElement("p");
  imgMovie.src = i.poster;
  nameMovie.innerText = i.title;
  yearMovie.innerText = i.release_date;
  groupMovie.setAttribute("class", "group2");
  divImgMovie.setAttribute("class", "cover");
  nameMovie.setAttribute("class", "name");
  yearMovie.setAttribute("class", "year");
  document.querySelector(".listOfMovies").appendChild(groupMovie);
  groupMovie.appendChild(divImgMovie);
  divImgMovie.appendChild(imgMovie);
  divImgMovie.appendChild(nameMovie);
  divImgMovie.appendChild(yearMovie);
}

//obtener datos del input text searchMovie y obtener la coincidencia
const searchBtn = document.getElementById("btnSearchMovie");
searchBtn.addEventListener("click", searching);
function searching() {
document.getElementById("Movies").style.display = "block";
document.getElementById("listOfMovies").style.display = "none";
document.getElementById("numberOfMovies").style.display = "none";

  const searchTextValue = document.getElementById("searchMovie").value;
  const filterMovie = movies2.filter(searchFunction);
  function searchFunction(item) {
    console.log(item.title);
    if (item.title == searchTextValue) {
      return true;
    }
    return false;
  }
  console.log(filterMovie);

  for (let i of filterMovie){
    //     titleOfData += i.title
  const groupMovie = document.createElement("div");
  const divImgMovie = document.createElement("div");
  const imgMovie = document.createElement("img");
  const nameMovie = document.createElement("p");
  const yearMovie = document.createElement("p");
  imgMovie.src = i.poster;
  nameMovie.innerText = i.title;
  yearMovie.innerText = i.release_date;

  groupMovie.setAttribute("class", "group2");
  divImgMovie.setAttribute("class", "cover");
  nameMovie.setAttribute("class", "name");
  yearMovie.setAttribute("class", "year");
  document.querySelector(".theMovie").appendChild(groupMovie);
  groupMovie.appendChild(divImgMovie);
  divImgMovie.appendChild(imgMovie);
  divImgMovie.appendChild(nameMovie);
  divImgMovie.appendChild(yearMovie);
  }

}

//Orden por año de mayor a menor
let s= movies2.sort(function(a, b){
  if(a.release_date > b.release_date) { return -1; }
  if(a.release_date < b.release_date) { return 1; }
  return 0;
})
console.table(s);

//Orden por 
let y= movies2.sort(function(a, b){
  if(a.title < b.title) { return -1; }
  if(a.title > b.title) { return 1; }
  return 0;
})
console.table(y);

//Para sacar la información de toda la información segun la busqueda
// const x = movies2.filter(predicate);
// function predicate(item) {
//   console.log(item.title);
//   if (item.title == "My Neighbor Totoro") {
//     return item.title;
//   }
//   return false;
// }
// console.table(x);
