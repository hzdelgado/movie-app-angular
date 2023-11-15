import { Component } from '@angular/core';
import { SearchBarComponent } from 'src/app/core/components/search-bar/search-bar.component';
import { GenreSelectorComponent } from '../../components/genre-selector/genre-selector.component';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/core/models/movie.model';
import { CommonModule } from '@angular/common';
import { MovieContainerComponent } from '../../movie-container/movie-container.component';
import { SearchFilterPipe } from 'src/app/shared/search-filter-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, GenreSelectorComponent, MovieContainerComponent, SearchFilterPipe],
  providers: [MovieService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchValue: string = "";
  genresSelected: string[] = [];
  movies: Movie[] = [];

  constructor(private service: MovieService) {
    this.getMovies();
  }

  getMovies() {
    this.service.getAvailableMovies().subscribe((val) => this.movies = val);
  }


  onGenreSelected(genres: string[]) {
    this.genresSelected = genres;
  }

  onSearch(value: string) {
    this.searchValue = value;
  }
}
