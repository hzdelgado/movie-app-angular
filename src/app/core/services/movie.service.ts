import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, map, pipe } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  async getAvailableMovies(): Promise<Movie[]> {
    const res = await axios.get<ApiResponse>('/assets/data/dummy-movies.json');
    return res.data.movies;
  }

  async getAvailableGenres(): Promise<string[]> {
    const res = await axios.get<ApiResponse>('/assets/data/dummy-movies.json');
    return res.data.genres;
  }
}
