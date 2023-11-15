import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-genre-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './genre-selector.component.html',
  styleUrls: ['./genre-selector.component.scss']
})
export class GenreSelectorComponent {
  genres: string[] = [];
  genreIds: string[] = [];
  @Output() genresSelected = new EventEmitter<string[]>();


  constructor(private service: MovieService) {
    this.getGenres();
  }

  onGenreClicked(value: string) {
    if(!this.genreIds.includes(value)) {
      this.genreIds.push(value);
    } else {
      this.genreIds.splice(this.genreIds.indexOf(value), 1);
    }
  }

  getGenres() {
    this.service.getAvailableGenres().subscribe((res) => {
      this.genres = res;
    })
  }
}
