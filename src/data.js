import data from "./data/ghibli/ghibli.js";

export const searchMovieInfo = (data, condition) => {
  let filterMovieInfo = data.filter(searchFunction);
  function searchFunction(item) {
    if (item.title == condition) {
      return true;
    } else {
      return false;
    }
  }
  return filterMovieInfo;
};

//console.log(searchMovieInfo(data.films,"Castle in the Sky"));

export const filterData = (data, condition) => {
  let filterMovie = data.filter(searchFunction);
  function searchFunction(item) {
    let titleMovie = item.title.toLowerCase();
    if (titleMovie.indexOf(condition) !== -1) {
      return true;
    }
    return false;
  }
  return filterMovie;
};
console.log(filterData(data.films, "Castle in the Sky"));

export const sortData = (data, sortBy, sortOrder) => {
  // if (sortBy === "rt_score"){
  if (sortOrder == "OrdAsc" && sortBy === "rt_score") {
    return data.sort(function (a, b) {
      if (parseInt(a[sortBy]) < parseInt(b[sortBy])) {
        return -1;
      }
      if (parseInt(a[sortBy]) > parseInt(b[sortBy])) {
        return 1;
      }
      return 0;
    });
  }
  if (sortOrder == "OrdDesc" && sortBy === "rt_score") {
    return data.sort(function (a, b) {
      if (parseInt(a[sortBy]) > parseInt(b[sortBy])) {
        return -1;
      }
      if (parseInt(a[sortBy]) < parseInt(b[sortBy])) {
        return 1;
      }
      return 0;
    });
  }
  // } else {

  if (sortOrder == "OrdAsc" && sortBy !== "rt_score") {
    return data.sort(function (a, b) {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
  if (sortOrder == "OrdDesc" && sortBy !== "rt_score") {
    return data.sort(function (a, b) {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
};
// }

export const computeStats = (data, sortBy) => {
  let topValues = data.sort((a, b) => b[sortBy] - a[sortBy]).slice(0, 10);
  return topValues;
};

// obtener cuantos directores producieron la pelicula
const movieData = data.films;
const countsDirector = {};
movieData.forEach((x) => {
  countsDirector[x.director] = (countsDirector[x.director] || 0) + 1;
});
console.log(countsDirector);

const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "b",
  "c",
  "f",
  "g",
  "h",
  "h",
  "h",
  "e",
  "a",
];
const counts = {};
arr.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(arr.length);
console.log(counts);
console.log(typeof counts);

//  var sema = ["lu","ma","mi"];
//  for (i in sema) {
//  console.log(sema[i]);
//  }
