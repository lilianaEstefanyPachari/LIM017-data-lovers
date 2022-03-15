import {filterData, sortData, computeStats, directorStats,searchMovieInfo} from '../src/data.js';
describe('Test of searchMovieInfo', () => {
  it('is a function of searchMovieInfo', () => {
    expect(typeof searchMovieInfo).toBe('function');
  });
  it('is a function of searchMovieInfo can search', () => {
    const films=[
      {"title": "Castle in the Sky","release_date": "1986"}, {"title": "My Neighbor Totoro","release_date": "1988"},{"title": "Kiki's Delivery Service","release_date": "1989"}
    ];
    const resultSearch=[{"title": "Castle in the Sky","release_date": "1986"}];
    const searchResult = searchMovieInfo(films,"Castle in the Sky");
    expect(searchResult).toEqual(resultSearch);
  });
});
describe('Test of filterData', () => {
  it('is a function of filterData', () => {
    expect(typeof filterData).toBe('function');
  });

  it('is a function of filterData can search', () => {
    const films=[
      {"title": "Castle in the Sky","release_date": "1986"}, {"title": "My Neighbor Totoro","release_date": "1988"},{"title": "Kiki's Delivery Service","release_date": "1989"}
    ];
    const resultTitle=[{"title": "Castle in the Sky","release_date": "1986"}];
    const filterResult = filterData(films,"castle");
    expect(filterResult).toEqual(resultTitle);
  });
});
describe('Test of sortData', () => {
  it('is a function of sortData', () => {
    expect(typeof sortData).toBe('function');
  });
  const resultOrd=[
    {"title": "Castle in the Sky","release_date": "1986","rt_score": "95"}, {"title": "My Neighbor Totoro","release_date": "1988","rt_score": "93"},{"title": "Kiki's Delivery Service","release_date": "1989","rt_score": "96"}
  ];
  it('sortData can orderAscendent A-Z', () => {
    const resultOrdAscAZ=[
      {"title": "Castle in the Sky","release_date": "1986","rt_score": "95"}, {"title": "Kiki's Delivery Service", "release_date": "1989","rt_score": "96"},{"title": "My Neighbor Totoro","release_date": "1988","rt_score": "93"}
    ];
    let filterResultYear = sortData(resultOrd, "title" , "OrdAsc");
    expect(filterResultYear).toEqual(resultOrdAscAZ);
  });

  it('sortData can orderDescendent Z-A', () => {
    const resultOrdDescZA=[
      {"title": "My Neighbor Totoro","release_date": "1988","rt_score": "93"},{"title": "Kiki's Delivery Service", "release_date": "1989","rt_score": "96"},{"title": "Castle in the Sky","release_date": "1986","rt_score": "95"}
    ];
    const filterResultDesc = sortData(resultOrd, "title" , "OrdDesc");
    expect(filterResultDesc).toEqual(resultOrdDescZA);
  });
  it('sortData can orderAscendent Score', () => {
    const resultOrdAscScore=[
      {"title": "My Neighbor Totoro","release_date": "1988","rt_score": "93"},{"title": "Castle in the Sky","release_date": "1986","rt_score": "95"},{"title": "Kiki's Delivery Service", "release_date": "1989","rt_score": "96"}
    ];
    let filterResultScore = sortData(resultOrd, "rt_score" , "OrdAsc");
    expect(filterResultScore).toEqual(resultOrdAscScore);
  });
  it('sortData can orderDescendent score', () => {
    const resultOrdDescScore=[
      {"title": "Kiki's Delivery Service", "release_date": "1989","rt_score": "96"},{"title": "Castle in the Sky","release_date": "1986","rt_score": "95"} ,{"title": "My Neighbor Totoro","release_date": "1988","rt_score": "93"} 
    ];
    const filterResultDesc = sortData(resultOrd, "rt_score" , "OrdDesc");
    expect(filterResultDesc).toEqual(resultOrdDescScore);
  });
});
describe('Test of computeStats', () => {
  it('is a function of computeStats', () => {
    expect(typeof computeStats).toBe('function');
  });
  it('function computeStats can order top 10', () => {
    const scoreData=[
      {"rt_score": "96"},{"rt_score": "94"} ,{"rt_score": "93"},{"rt_score": "97"},{"rt_score": "95"} ,{"rt_score": "90"},{"rt_score": "183"},
      {"rt_score": "85"},{"rt_score": "69"} ,{"rt_score": "89"},{"rt_score": "77"},{"rt_score": "100"} ,{"rt_score": "40"},{"rt_score": "79"}
];
    const resultScore=[{"rt_score": "183"},{"rt_score": "100"},{"rt_score": "97"},{"rt_score": "96"},{"rt_score": "95"},{"rt_score": "94"},{"rt_score": "93"},{"rt_score": "90"},{"rt_score": "89"}, {"rt_score": "85"}];
    const topData = computeStats(scoreData, "rt_score");
    expect(topData).toEqual(resultScore);
  });
});
describe('Test of directorStats', () => {
  it('directorStats is a function', () => {
    expect(typeof directorStats).toBe('function');
  });
  it('function directorStats give us the number of movies for each director', () => {
    const directorData=[
      {"director": "Hayao Miyazaki"},{"director": "Hayao Miyazaki"},{"director": "Hayao Miyazaki"},{"director": "Isao Takahata"},{"director": "Gorō Miyazaki"},{"director": "Gorō Miyazaki"},{ "director": "Yoshifumi Kondō"}
    ];
    const resultDirector={"task":"key","Hayao Miyazaki": 3,"Isao Takahata":1,"Gorō Miyazaki":2,"Yoshifumi Kondō":1};
    const directorDataResult = directorStats(directorData,"director");
    expect(directorDataResult).toEqual(resultDirector);
  });
});