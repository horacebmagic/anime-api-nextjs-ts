export interface SearchAnimeByGenre {
  results: SearchAnimeByGenreResult[];
  last_page: number;
}

export interface SearchAnimeByGenreResult {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: Type;
  episodes: number;
  score: number;
  start_date: Date | null;
  end_date: Date | null;
  members: number;
  rated: Rated;
}

export enum Rated {
  G = "G",
  PG = "PG",
  PG13 = "PG-13",
  R = "R",
  RatedR = "R+",
}

export enum Type {
  Movie = "Movie",
  Ona = "ONA",
  Ova = "OVA",
  Special = "Special",
  Tv = "TV",
}
