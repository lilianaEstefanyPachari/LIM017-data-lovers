//import { example } from "./data.js";
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from "./data/ghibli/ghibli.js";
import { filterData, sortData } from "./data.js";

// console.table(sortData(data.films, "release_date", "OrdDesc"));
// console.table(sortData(data.films, "release_date", "OrdAsc"));

//el numero de las peliculas
function numberMovies(numberMovie){
const numberOfMovies = numberMovie.length;
document.getElementById("numberOfMovies").innerHTML = numberOfMovies + " Movies";
}

//mostrar data con HTML
let listOfMovies=document.querySelector(".listOfMovies");
let themovie=document.querySelector(".theMovie");
let movies2=data.films;
function showData(movies2,place){
  listOfMovies.innerHTML="";
  themovie.innerHTML="";
  for (let i of movies2) {
    place.innerHTML+= `
      <div class="group2">
      <div class="cover">
      <img src=${i.poster}>
      <p class="name">${i.title}</p>
      <p class="year">${i.release_date}</p>
      <p class="score"> Score: ${i.rt_score}</p>
      </div>
      </div> `;
  } 
}
numberMovies(movies2);
showData(movies2,listOfMovies);
/*
//jalar  la data general a la interfaz con appendChild
let movies2 = data.films;
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
}*/
//BARRA DE BUSQUEDA,obtener datos del input searchMovie y mostrar la coincidencia
const searchBtn = document.getElementById("btnSearchMovie");
searchBtn.addEventListener("click", searching);
function searching() {
  document.getElementById("Movies").style.display = "block";
  document.getElementById("listOfMovies").style.display = "none";
  document.getElementById("numberOfMovies").style.display = "block";
  const searchTextValue = document.getElementById("searchMovie").value;
  const filterResult = filterData(data.films, searchTextValue);
  console.log(typeof filterResult);
  numberMovies(filterResult);
  showData(filterResult,themovie);
  /*for (let i of filterResult) {
    themovie.innerHTML+= `
      <div class="group2">
      <div class="cover">
      <img src=${i.poster}>
      <p class="name">${i.title}</p>
      <p class="year">${i.release_date}</p>
      </div>
      </div> `;
  } */
  /*for (let i of filterResult) {
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
  }*/
}
const yearBotonnn= document.getElementById("selectYear");
yearBotonnn.addEventListener("click", pruebafun);
function pruebafun (){
  let yearSelect= document.getElementById("selectYear").value;
  console.log(yearSelect);
}





//obtener filtros de AÑO

const yearBoton= document.getElementById("selectYear");
yearBoton.addEventListener("click", filterFunction);

function filterFunction() {
  if (yearBoton.value == "Year"){return}
      //if( botonAZ.value == "A-Z"){return}
  document.getElementById("Movies").style.display = "block";
  document.getElementById("listOfMovies").style.display = "none";
  document.getElementById("numberOfMovies").style.display = "block";
  let yearSelect= document.getElementById("selectYear").value;
  console.log (yearSelect);
  //let azSelect= document.getElementById("selectOrder").value;
  let filterResultYear = sortData(data.films, "release_date" , yearSelect);
  numberMovies(filterResultYear);
  showData(filterResultYear,themovie);
  /*for (let i of filterResultYear) {
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
    movieGroup.appendChild(groupMovie);
    groupMovie.appendChild(divImgMovie);
    divImgMovie.appendChild(imgMovie);
    divImgMovie.appendChild(nameMovie);
    divImgMovie.appendChild(yearMovie);
  }*/
}

//obtener filtro de A-Z

const botonAZ= document.getElementById("selectOrder");
botonAZ.addEventListener("click", filterFunction2);

function filterFunction2() {
  if( botonAZ.value == "A-Z"){return}
  document.getElementById("Movies").style.display = "block";
  document.getElementById("listOfMovies").style.display = "none";
  document.getElementById("numberOfMovies").style.display = "block";
  let azSelect= document.getElementById("selectOrder").value;
  let filterResultTitle = sortData(data.films, "title" , azSelect);
  numberMovies(filterResultTitle);
  showData(filterResultTitle,themovie);
  /*
  for (let i of filterResultTitle) {
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
    movieGroup.appendChild(groupMovie);
    groupMovie.appendChild(divImgMovie);
    divImgMovie.appendChild(imgMovie);
    divImgMovie.appendChild(nameMovie);
    divImgMovie.appendChild(yearMovie);
  }*/
}

//filtro por score

const botonScore= document.getElementById("selectScore");
botonScore.addEventListener("click", filterFunction3);

function filterFunction3() {
  if( botonScore.value == "Score"){return}
  document.getElementById("Movies").style.display = "block";
  document.getElementById("listOfMovies").style.display = "none";
  document.getElementById("numberOfMovies").style.display = "block";
  let scoreSelect= document.getElementById("selectScore").value;
  let filterResultScore = sortData(data.films, "rt_score" , scoreSelect);
  numberMovies(filterResultScore);
  showData(filterResultScore,themovie);
}

//filtro por nombre de A-Z
// console.table(sortData(data.films,"title","OrdAsc"));
// console.table(sortData(data.films,"title","OrdDesc"));

//filtro por score
console.table(sortData(data.films,"rt_score","OrdAsc"));
console.table(sortData(data.films,"rt_score","OrdDesc"));





//Orden por año de mayor a menor

// let s = movies2.sort(function (a, b) {
//   if (a.release_date > b.release_date) {
//     return -1;
//   }
//   if (a.release_date < b.release_date) {
//     return 1;
//   }
//   return 0;
// });
// console.table(s);





/*

console.table(sortData(data.films, "release_date", "OrdAsc"));

//Orden por año de menor a mayor
let h = movies2.sort(function (a, b) {
  if (a.release_date < b.release_date) {
    return -1;
  }
  if (a.release_date > b.release_date) {
    return 1;
  }
  return 0;
});
console.table(h);
console.table(sortData(data.films, "release_date", "OrdDesc"));


*/



// //Orden por
/*let y = movies2.sort(function (a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
});*/
//console.table(y);

//sortData(movies2,orderAsc,);

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




/*
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
*/
