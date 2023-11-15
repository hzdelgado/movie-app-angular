import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, map, pipe } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { Movie } from '../models/movie.model';
import Axios, { AxiosObservable } from 'axios-observable';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getAvailableMovies(): Observable<Movie[]> {
    return Axios.get<ApiResponse>('/assets/data/dummy-movies.json').pipe(map(e => e.data.movies));
  }

  getAvailableGenres(): Observable<string[]> {
    return Axios.get<ApiResponse>('/assets/data/dummy-movies.json').pipe(map(e => e.data.genres));
  }
}
