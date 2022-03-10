import data from "./data/ghibli/ghibli.js";
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