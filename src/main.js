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









//Para sacar la información de toda la información segun la busqueda
const x = movies2.filter(predicate);
function predicate(item) {
  console.log(item.title);
  if (item.title == "My Neighbor Totoro") {
    return item.title;
  }
  return false;
}
console.table(x);

/*let movie="Howl's Moving Castle";
let rpta=true;
for (let i of movies2) {
    if (movie===i.title){
        rpta=true;
        
    }else{
        rpta=false;
    }
}
console.log(rpta);*/

/* const cajita = document.createElement("img");
cajita.src = data.films[0].poster;
document.getElementById("cover").appendChild(cajita);


let peliculas = data.films;
const movieName=document.querySelector(".name");
//const movieYear=document.querySelector(".year");
for (let i of peliculas) {
    movieName.innerHTML+="<br> Name" + i.title +"<br> Year: "+i.release_date ;
    //movieYear.innerHTML+=i.release_date;
console.log (i.title)
console.log(i.release_date)
} */

/*let movies = data.films;
for (let i of movies) {
const imgMovie = document.createElement("img");
let nameMovie = document.createElement("p");
let yearMovie = document.createElement("p");
imgMovie.src = i.poster;
nameMovie.innerText = i.title;
yearMovie.innerText = i.release_date;
document.getElementById("cover").appendChild(imgMovie);
document.getElementById("cover").appendChild(nameMovie);
document.getElementById("cover").appendChild(yearMovie);
}*/

console.log(example, data); //example es una funcion y data un objeto
console.log(typeof data);
console.log(data);

/* const cajita = document.createElement("img");
cajita.src = data.films[0].poster;
document.getElementById("cover").appendChild(cajita);*/

// g = document.createElement('div');
// g.setAttribute("id", "Div1");
// divImgMovie.class = "coverX"

// const imgMovie2 = document.createElement("img");
// imgMovie2.src = i.poster;
// document.getElementById("cover2").appendChild(imgMovie2);
// }

// let peliculas = data.films;

// for (let i of peliculas) {
//     // console.log (i.title)
//     // console.log(i.release_date)
//     // // console.log(i.people)
//     let personas = i.people;
//     for (let propiedad of personas){
//         console.log(propiedad.name);
//     }
// };

// import { searchData } from './data.js';
// cajita.src = data.films[0].poster;
// for (let i of movies2) {
//  const movieTitle = i.title;
//  console.log(movieTitle);
//  const searchMovie = (movieTitle)=>{if (movieTitle === "My Neighbor Totoro"){
//      return true
//  }
//  return false
//  }
// const searchedData = movieTitle.filter(searchMovie);
// console.log(searchedData);
// }

// let titleOfData ="";
// for (let i of movieTitle){
//     console.log(i.title)
//     titleOfData += i.title
// }
