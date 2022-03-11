import data from "./data/ghibli/ghibli.js";

export const searchMovieInfo = (data,condition) => {
  let filterMovieInfo = data.filter(searchFunction);
  function searchFunction(item) {
    if (item.title==condition)
    { return true;
    } else {
      return false;}
  }
  return filterMovieInfo;
};

//console.log(searchMovieInfo(data.films,"Castle in the Sky"));

export const filterData = (data,condition) => {
  let filterMovie = data.filter(searchFunction);
  function searchFunction(item) {
    let titleMovie=item.title.toLowerCase();
    if (titleMovie.indexOf(condition)!==-1) {
      return true;
    }
    return false;
  }
  return filterMovie;
};
console.log(filterData(data.films,"Castle in the Sky"));

export const sortData = (data,sortBy,sortOrder) => {

  if (sortOrder=="OrdAsc") {
    return data.sort(function (a,b) {
      if(a[sortBy] < b[sortBy]) {return -1; }
      if(a[sortBy] > b[sortBy]) {return 1; }
      return 0;
    });
  } else if (sortOrder=="OrdDesc"){
    return data.sort(function (a,b) {
      if(a[sortBy] > b[sortBy]) {return -1; }
      if(a[sortBy] < b[sortBy]) {return 1; }
      return 0;
    });
  }
};