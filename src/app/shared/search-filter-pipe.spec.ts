import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFilterPipe } from './search-filter-pipe';
import { dummyMovies } from '../core/services/test-data';

describe('SearchFilterPipe', () => {
  let pipe: SearchFilterPipe;

  beforeEach(() => {

    pipe = new SearchFilterPipe();
  });

  it('filter list when searchTerm is "Inc"', () => {
    let expectedResult = [
      {
        id: 2,
        title: 'Inception',
        description:
          'A thief who steals corporate secrets throuhj the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
        genre: 'Action',
      },
    ];
    expect(pipe.transform(dummyMovies, 'Inc')).toEqual(expectedResult);
  });

  it('return empty list when searchTerm is "Inc" and genres selected is "Crime"', () => {
    let expectedResult = [
      {
        id: 2,
        title: 'Inception',
        description:
          'A thief who steals corporate secrets throuhj the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
        genre: 'Action',
      },
    ];
    expect(pipe.transform(dummyMovies, 'Inc', ["Crime"])).toEqual([]);
  });

  it('return data when genres selected are "Crime" and "Action"', () => {
    let expectedResult = [
      {
        "id": 4,
        "title": "Pulp Fiction",
        "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "genre": "Crime"
      },
      {
        "id": 5,
        "title": "The Godfather",
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        "genre": "Crime"
      },
      {
        "id": 2,
        "title": "Inception",
        "description": "A thief who steals corporate secrets throuhj the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
        "genre": "Action"
      },
      {
        "id": 3,
        "title": "The Dark Knight",
        "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        "genre": "Action"
      },
    ];
    expect(pipe.transform(dummyMovies, "", ["Crime", "Action"]).map(val => val.id).sort()).toEqual(expectedResult.map(val => val.id).sort());
  });

  it('return complete list when genres selected is empty', () => {
    let expectedResult = dummyMovies;
    expect(pipe.transform(dummyMovies, "", []).map(val => val.id).sort()).toEqual(expectedResult.map(val => val.id).sort());
  });
});
