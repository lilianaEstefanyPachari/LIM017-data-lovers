import {filterData, sortData } from '../src/data.js';

describe('Test of filterData', () => {
  it('is a function of filterData', () => {
    expect(typeof filterData).toBe('function');
  });

  it('is a function of filterData can search', () => {
    const films=[
      {"title": "Castle in the Sky","release_date": "1986"}, {"title": "My Neighbor Totoro","release_date": "1988"},{"title": "Kiki's Delivery Service","release_date": "1989"}
    ];
    const resultTitle=[{"title": "Castle in the Sky","release_date": "1986"}];
    const search=films.title;
    const filterResult = filterData(search,"Castle in the Sky");
    expect(filterResult).toEqual(resultTitle);
  });

  /*it('returns `example`', () => {
    expect(example()).toBe('example');
  });*/
});


describe('Test of sortData', () => {
  it('is a function of sortData', () => {
    expect(typeof sortData).toBe('function');
  });

  const resultOrd=[
    {"title": "Castle in the Sky","release_date": "1986"}, {"title": "My Neighbor Totoro","release_date": "1988"},{"title": "Kiki's Delivery Service","release_date": "1989"}
  ];

  it('sortData can orderAscendent A-Z', () => {
    const resultOrdAscAZ=[
      {"title": "Castle in the Sky","release_date": "1986"}, {"title": "Kiki's Delivery Service", "release_date": "1989"},{"title": "My Neighbor Totoro","release_date": "1988"}
    ];
    let filterResultYear = sortData(resultOrd, "title" , "OrdAsc");
    expect(filterResultYear).toEqual(resultOrdAscAZ);
  });

  it('sortData can orderDescendent Z-A', () => {
    const resultOrdDescZA=[
      {"title": "My Neighbor Totoro","release_date": "1988"},{"title": "Kiki's Delivery Service", "release_date": "1989"},{"title": "Castle in the Sky","release_date": "1986"}
    ];
    const filterResultDesc = sortData(resultOrd, "title" , "OrdDesc");
    expect(filterResultDesc).toEqual(resultOrdDescZA);
  });
});






