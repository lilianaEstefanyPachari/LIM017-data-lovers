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
export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder == "OrdAsc" && sortBy === "rt_score") {
    return data.sort(function (a, b) {
      if (parseInt(a[sortBy]) < parseInt(b[sortBy])) {
        return -1;
      }
      // if (parseInt(a[sortBy]) > parseInt(b[sortBy])) {
      //   return 1;
      // }
      // return 0;
    });
  }
  if (sortOrder == "OrdDesc" && sortBy === "rt_score") {
    return data.sort(function (a, b) {
      if (parseInt(a[sortBy]) > parseInt(b[sortBy])) {
        return -1;
      }
      // if (parseInt(a[sortBy]) < parseInt(b[sortBy])) {
      //   return 1;
      // }
      // return 0;
    });
  }
  if (sortOrder == "OrdAsc" && sortBy !== "rt_score") {
    return data.sort(function (a, b) {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      // if (a[sortBy] > b[sortBy]) {
      //   return 1;
      // }
      // return 0;
    });
  }
  if (sortOrder == "OrdDesc" && sortBy !== "rt_score") {
    return data.sort(function (a, b) {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      // if (a[sortBy] < b[sortBy]) {
      //   return 1;
      // }
      // return 0;
    });
  }
};
export const computeStats = (data, sortBy) => {
  let topValues = data.sort((a, b) => b[sortBy] - a[sortBy]).slice(0, 10);
  return topValues;
};
export const directorStats = (data,key)=>{
  const countsDirector = {task:"key"};
  data.forEach((x) => {
    countsDirector[x[key]] = (countsDirector[x[key]] || 0) + 1;
  });
  return countsDirector;
};