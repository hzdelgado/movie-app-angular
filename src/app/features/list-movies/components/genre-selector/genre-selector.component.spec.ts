import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenreSelectorComponent } from './genre-selector.component';
import { MovieService } from 'src/app/core/services/movie.service';
import { dummyGenres } from 'src/app/core/services/test-data';
import { async, first, of } from 'rxjs';

let userServiceStub: Partial<MovieService>;

userServiceStub = {
  getAvailableGenres: () => of(dummyGenres),
};
describe('GenreSelectorComponent', () => {
  let component: GenreSelectorComponent;
  let fixture: ComponentFixture<GenreSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GenreSelectorComponent],
      providers: [{ provide: MovieService, useValue: userServiceStub }],
    }).compileComponents();
    fixture = TestBed.createComponent(GenreSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "genres" populated ', () => {
    expect(component.genres.length).toBeGreaterThan(0);
  });

  it('#onGenreClicked() should toggle genre button', (done: DoneFn) => {
    let expectedResult = 'Crime';
    component.genresSelected
      .pipe(first())
      .subscribe((val) => {
        expect(val).toEqual([expectedResult]);
        done();
      });
    component.onGenreClicked(expectedResult);
  });
});
