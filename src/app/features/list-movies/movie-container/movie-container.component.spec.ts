import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieContainerComponent } from './movie-container.component';
import { Movie } from 'src/app/core/models/movie.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('MovieContainerComponent', () => {
  let component: MovieContainerComponent;
  let fixture: ComponentFixture<MovieContainerComponent>;
  let expectedMovie: Movie;
  let movieDe: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovieContainerComponent],
    });
    fixture = TestBed.createComponent(MovieContainerComponent);
    component = fixture.componentInstance;

    expectedMovie = {
      id: 1,
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
      genre: 'Drama',
    };

    component.movie = expectedMovie;
    fixture.detectChanges();
  });

  it('should display movie title', () => {
    movieDe = fixture.debugElement.query(By.css('.movie-item__title'));
    expect(movieDe.nativeElement.textContent).toEqual(expectedMovie.title);
  });

  it('should display movie description', () => {
    movieDe = fixture.debugElement.query(By.css('.movie-item__description'));
    expect(movieDe.nativeElement.textContent).toEqual(expectedMovie.description);
  });

  it('should display movie genre', () => {
    movieDe = fixture.debugElement.query(By.css('.movie-item__genre'));
    expect(movieDe.nativeElement.textContent).toEqual(expectedMovie.genre);
  });

  it('should display movie genre', () => {
    movieDe = fixture.debugElement.query(By.css('.movie-item__poster'));
    expect(movieDe.nativeElement.src).toEqual(expectedMovie.poster);
  });
});
