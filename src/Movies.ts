import moviesJson from "./Movies.json"

export interface Movie {
  id: number;
  name: string;
  genre: string;
  image: string;
}

export const movies: Movie[] = moviesJson;