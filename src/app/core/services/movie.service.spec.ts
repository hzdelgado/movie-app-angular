import { TestBed } from '@angular/core/testing';
import { MovieService } from './movie.service';
import { dummyGenres, dummyMovies } from './test-data';

describe('MovieServiet', () => {
  let service: MovieService;
  beforeEach(() => { 
    service = TestBed.inject(MovieService); });

    it('it should be created', () => {
      expect(service).toBeTruthy();
    });

  it('#getValue should return real movies from the real service', (done: DoneFn) => {
    service.getAvailableMovies().then(value => {
      expect(value).toEqual(dummyMovies);
      done();
    });
  });

  it('#getValue should return real genres from the real service', (done: DoneFn) => {
    service.getAvailableGenres().then(value => {
      expect(value).toEqual(dummyGenres);
      done();
    });
  });

  
});