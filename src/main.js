import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/ghibli/ghibli.js';

let movies2 = data.films;
for (let i of movies2) {
    const divImgMovie= document.createElement("div");
    const imgMovie = document.createElement("img");
    let nameMovie = document.createElement("p");
    let yearMovie = document.createElement("p");
    imgMovie.src = i.poster;
    nameMovie.innerText = i.title;
    yearMovie.innerText = i.release_date;
    divImgMovie.setAttribute("class","cover");
    document.getElementById("group2").appendChild(divImgMovie);
    divImgMovie.appendChild(imgMovie);
    divImgMovie.appendChild(nameMovie);
    divImgMovie.appendChild(yearMovie);
}

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

