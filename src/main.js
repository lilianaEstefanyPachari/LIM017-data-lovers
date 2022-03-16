/* eslint-disable no-undef */
//import { example } from "./data.js";
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from "./data/ghibli/ghibli.js";
import { searchMovieInfo, filterData, sortData, computeStats, directorStats } from "./data.js";

// console.table(sortData(data.films, "release_date", "OrdDesc"));
// console.table(sortData(data.films, "release_date", "OrdAsc"));

//el numero de las peliculas
function numberMovies(numberMovie) {
  const numberOfMovies = numberMovie.length;
  document.getElementById("numberOfMovies").innerHTML =
    numberOfMovies + " Movies";
}

//mostrar data con HTML
const listOfMovies = document.querySelector(".listOfMovies");
const themovie = document.querySelector(".theMovie");
const infoContainer = document.querySelector(".infoContainer");
const infoData = document.querySelector(".infoData");
const people = document.querySelector(".people");
const locations = document.querySelector(".locations");
const vehicles = document.querySelector(".vehicles");
//const chartData = document.querySelector(".chartData");

let movies2 = data.films;
function showData(movies2, place) {
  listOfMovies.innerHTML = "";
  themovie.innerHTML = "";
  infoContainer.innerHTML = "";
  infoData.innerHTML = "";
  const persons = movies2[0].people;
  const locationsMovie = movies2[0].locations;
  const vehiclesMovie = movies2[0].vehicles;
  switch (place) {
    case infoContainer:
      for (let i of movies2) {
        place.innerHTML += `
              <div class="movieImg">
                <img src=${i.poster}>
              </div>
              <div class="infoMovie">
                <h3 class="titleMovie">${i.title}</h3>
                <p class="subtitles"> Description </p>
                <p class="parag">${i.description}</p>
                <p class="subtitles">Director </p>
                <p class="parag">${i.director}</p>
                <p class="subtitles">Producer</p>
                <p class="parag">${i.producer}</p>
                <p class="subtitles">Release Date</p>
                <p class="parag">${i.release_date}</p>
                <div class="scoreMovie">
                   <p class="subtitles">Score: </p>
                   <p class="parag">${i.rt_score}</p>
                </div>
              </div>`;
      }
      for (let i of persons) {
        people.innerHTML += `
              <div class="groupInfoItems">
                <div class="coverInfoItems">
                  <img src=${i.img}>
                </div>
                <div class="nameinside">
                 <p class="nameInfoPeople">${i.name}</p>
                </div>
              </div> `;
      }
      for (let i of locationsMovie) {
        locations.innerHTML += `
              <div class="groupInfoLocation">
                <div class="coverLocation" style="background-image: url(${i.img})">
                </div>
                <div class="nameOfLocation">
                 <p class="nameItems">${i.name}</p>
                </div>
              </div> `;
      }
      for (let i of vehiclesMovie) {
        vehicles.innerHTML += `
              <div class="groupInfoVehicles">
                 <div class="coverVehicles" style="background-image: url(${i.img})">
                 </div>
                 <div class="nameOfVehicles">
                    <p class="nameItems">${i.name}</p>
                 </div>
              </div> `;
      }
      break;
    case infoData:
      for (let i of movies2) {
        place.innerHTML += `
        <div class="movieTop">
        <img src=${i.poster}>
        <div class="infoTop">
        <h3 class="titleTop">${i.release_date} | ${i.title}</h3>
        <p class="textMovie">${i.description}</p>
        </div>
        <div class="scoreMovie2">
        <p> Score: ${i.rt_score}</p>
        </div>
        </div>`;
      }
      break;
    default:
      for (let i of movies2) {
        place.innerHTML += `
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
  if (place.innerHTML === "") {
    place.innerHTML += `
    <h1> No se encontro la búsqueda </h1>`;
  }
}
numberMovies(movies2);
showData(movies2, themovie);
clickCoverAll();

//monstrar informacion de cada pelicula
function clickCoverAll() {
  const divCover = document.querySelectorAll(".cover");
  divCover.forEach((addDivCover) => {
    addDivCover.addEventListener("click", clickCover);
  });
}

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
  let searchTextValue = document
    .getElementById("searchMovie")
    .value.toLowerCase();
  //let searchTextValue2 = searchTextValue.replace(/ /g, "");
  const filterResult = filterData(data.films, searchTextValue);
  console.log(filterResult);
  numberMovies(filterResult);
  showData(filterResult, themovie);
  clickCoverAll();

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

//obtener filtros de AÑO
const yearBoton = document.getElementById("selectYear");
yearBoton.addEventListener("click", filterFunction);

function filterFunction() {
  if (yearBoton.value === "Year") {
    return;
  }
  document.getElementById("Movies").style.display = "block";
  document.getElementById("listOfMovies").style.display = "none";
  document.getElementById("numberOfMovies").style.display = "block";
  let yearSelect = document.getElementById("selectYear").value;
  console.log(yearSelect);

  let filterResultYear = sortData(data.films, "release_date", yearSelect);
  numberMovies(filterResultYear);
  showData(filterResultYear, themovie);
  clickCoverAll();
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

const botonAZ = document.getElementById("selectOrder");
botonAZ.addEventListener("click", filterFunction2);

function filterFunction2() {
  if (botonAZ.value === "A-Z") {
    return;
  }
  document.getElementById("Movies").style.display = "block";
  document.getElementById("listOfMovies").style.display = "none";
  document.getElementById("numberOfMovies").style.display = "block";
  let azSelect = document.getElementById("selectOrder").value;
  let filterResultTitle = sortData(data.films, "title", azSelect);
  numberMovies(filterResultTitle);
  showData(filterResultTitle, themovie);
  clickCoverAll();
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

const botonScore = document.getElementById("selectScore");
botonScore.addEventListener("click", filterFunction3);

function filterFunction3() {
  if (botonScore.value === "Score") {
    return;
  }
  document.getElementById("Movies").style.display = "block";
  document.getElementById("listOfMovies").style.display = "none";
  document.getElementById("numberOfMovies").style.display = "block";
  let scoreSelect = document.getElementById("selectScore").value;
  let filterResultScore = sortData(data.films, "rt_score", scoreSelect);
  numberMovies(filterResultScore);
  showData(filterResultScore, themovie);
  clickCoverAll();
}

//funcion no filtrar

const botonDontFilter = document.getElementById("noFilter");
botonDontFilter.addEventListener("click", dontfilterFunction);

function dontfilterFunction() {
  // $("#selectScore").load(" #selectScore > *");
  //$( "#listOfMovies" ).load(window.location.href + " #listOfMovies" );
  const selectOrder = document.getElementById("selectOrder");
  const selectYear = document.getElementById("selectYear");
  const selectScore = document.getElementById("selectScore");
  selectOrder.options[0].selected = "selected";
  selectYear.options[0].selected = "selected";
  selectScore.options[0].selected = "selected";

  //problem
  numberMovies(movies2);
  showData(movies2, themovie);
}

// yearBoton.value == "noFilter";
//   numberMovies(movies2);
//   showData(movies2,listOfMovies);

//filtro por score
console.table(sortData(data.films, "rt_score", "OrdAsc"));
console.table(sortData(data.films, "rt_score", "OrdDesc"));

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

//funcion para el scroll top
function scroll() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clickCover(e) {
  document.querySelector(".homePage").style.display = "none";
  document.querySelector(".container").style.display = "none";
  document.querySelector(".moviePage").style.display = "block";
  scroll();
  console.log("holaaaaa");
  obtainName(e.target);
  //const objeto={ name:selectCover.querySelector(".name").textContent;}
  //console.log(movieName);
  //
}

function obtainName(objeto) {
  console.log(objeto);
  const movieName = objeto.querySelector(".name").textContent;
  console.log(movieName);
  const filterResult = searchMovieInfo(data.films, movieName);
  console.log(filterResult);
  showData(filterResult, infoContainer);
  // for (let i of filterResult) {
  //   infoMovie.innerHTML+= `
  //     <div class="group2">
  //     <div class="cover">
  //     <img src=${i.poster}>
  //     <p class="name">${i.director}</p>
  //     <p class="year">${i.release_date}</p>
  //     <p class="score"> Score: ${i.rt_score}</p>
  //     </div>
  //     </div> `;
  // }
  // if (movieName=="Castle in the Sky"){
  //   console.log("Yes");
  // } else{
  //   console.log("No");}
}

const topMovies = document.getElementById("topMovies");
topMovies.addEventListener("click", dataTop);
function dataTop() {
  console.log("holaaasdasd");
  document.querySelector(".container").style.display = "none";
  document.querySelector(".dataStatics").style.display = "block";
  document.querySelector(".chartData").style.display = "none";
  document.querySelector(".moviePage").style.display = "none";
  const topData = computeStats(data.films, "rt_score");
  showData(topData, infoData);
}


// console.table(dataTop());



//llamando a la funcion para estadistica por productores
const directorData = directorStats(data.films,"director");
const producerData = directorStats(data.films,"producer");
// directorData.task="director";
// console.log(directorData);
const entries = Object.entries(directorData);
const entriesProducer = Object.entries(producerData);
//Data Table
const dataMovies = document.getElementById("dataMovies");
dataMovies.addEventListener("click", dataTop2);

function dataTop2() {
console.log("confe");
document.querySelector(".container").style.display = "none";
  document.querySelector(".chartData").style.display = "block";
  document.querySelector(".dataStatics").style.display = "none";
  document.querySelector(".moviePage").style.display = "none";
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var data = google.visualization.arrayToDataTable(entries);
  var dataProducer = google.visualization.arrayToDataTable(entriesProducer);
  var options = {
     title: 'Directors who produce a Guibli film',
     pieHole: 0.4,
     };
  var optionsProducer = {
    title: 'Producers who produce a Guibli film',
    pieHole: 0.4,
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
  var chartProducer = new google.visualization.PieChart(document.getElementById('donutchartProducer'));
  chartProducer.draw(dataProducer, optionsProducer);
}