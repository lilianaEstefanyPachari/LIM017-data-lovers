// funcion busc
console.log("holaaaaaaa");

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

//copia de seguridad
export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder=="OrdAsc") {
    return data.sort(function orderAsc(a,b){
      if(a.sortBy > b.sortBy) { return -1; }
      if(a.sortBy < b.sortBy) { return 1; }
      return 0;
    });
  } else if (sortOrder=="OrdDesc"){
    return data.sort(function orderDesc(a,b){
      if(a.sortBy < b.sortBy) { return -1; }
      if(a.sortBy > b.sortBy) { return 1; }
      return 0;
    });
  }
};

//console.log(sortData(movies2,title,"OrdAsc"));


export const anotherExample = () => {
  return 'OMG';
};

// export const searchData = (i) => { 
//   console.log(i);
// }
  

