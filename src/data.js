// funcion busc
export const filterData = (data,condition) => {
  let filterMovie = data.filter(searchFunction);
  function searchFunction(item) {
    if (item.title==condition) {
      return true;
    }
    return false;
  }
  return filterMovie;
};

//console.log(filterData(movies2,"Castle in the Sky"));

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




//console.table(sortData(data.films,"release_date","OrdAsc"));
//console.table(sortData(data.films,"release_date","OrdDesc"));

//console.table(sortData(data.films,"title","OrdAsc"));
//console.table(sortData(data.films,"title","OrdDesc"));



export const anotherExample = () => {
  return 'OMG';
};
