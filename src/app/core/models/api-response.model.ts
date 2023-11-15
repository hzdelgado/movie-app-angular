import { Movie } from "./movie.model";

export interface ApiResponse {
    movies: Movie[];
    genres: string[];
}