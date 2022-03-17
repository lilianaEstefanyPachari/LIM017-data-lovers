/* eslint-disable no-undef */
import data from "./data/ghibli/ghibli.js";
import { searchMovieInfo, filterData, sortData, computeStats, directorStats } from "./data.js";
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

//BARRA DE BUSQUEDA,obtener datos del input searchMovie y mostrar la coincidencia
const searchBtn = document.getElementById("btnSearchMovie");
searchBtn.addEventListener("click", searching);
function searching() {
  document.getElementById("Movies").style.display = "block";
  document.getElementById("listOfMovies").style.display = "none";
  document.getElementById("numberOfMovies").style.display = "block";
  let searchTextValue = document.getElementById("searchMovie").value.toLowerCase();
  const filterResult = filterData(data.films, searchTextValue);
  numberMovies(filterResult);
  showData(filterResult, themovie);
  clickCoverAll();
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


  let filterResultYear = sortData(data.films, "release_date", yearSelect);
  numberMovies(filterResultYear);
  showData(filterResultYear, themovie);
  clickCoverAll();
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
  const selectOrder = document.getElementById("selectOrder");
  const selectYear = document.getElementById("selectYear");
  const selectScore = document.getElementById("selectScore");
  selectOrder.options[0].selected = "selected";
  selectYear.options[0].selected = "selected";
  selectScore.options[0].selected = "selected";
  numberMovies(movies2);
  showData(movies2, themovie);
}

//funcion para el scroll top
function scroll() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clickCover(e) {
  document.querySelector(".homePage").style.display = "none";
  document.querySelector(".container").style.display = "none";
  document.querySelector(".moviePage").style.display = "block";
  scroll();
  obtainName(e.target);
}

function obtainName(objeto) {
  const movieName = objeto.querySelector(".name").textContent;
  const filterResult = searchMovieInfo(data.films, movieName);
  showData(filterResult, infoContainer);
}

const topMovies = document.getElementById("topMovies");
topMovies.addEventListener("click", dataTop);
function dataTop() {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".dataStatics").style.display = "block";
  document.querySelector(".chartData").style.display = "none";
  document.querySelector(".moviePage").style.display = "none";
  const topData = computeStats(data.films, "rt_score");
  showData(topData, infoData);
}

//Homepage
const homePage = document.getElementById("homePage");
homePage.addEventListener("click", home);
function home() {
  location.reload();
}
//llamando a la funcion para estadistica por productores
const directorData = directorStats(data.films,"director");
const producerData = directorStats(data.films,"producer");
const entries = Object.entries(directorData);
const entriesProducer = Object.entries(producerData);

//Data Table
const dataMovies = document.getElementById("dataMovies");
dataMovies.addEventListener("click", dataTop2);
function dataTop2() {
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