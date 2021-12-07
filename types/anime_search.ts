export interface AnimeSearch {
  results: AnimeSearchResult[];
  last_page: number;
}

export interface AnimeSearchResult {
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
  rated: Rated | null;
}

export enum Rated {
  G = "G",
  PG = "PG",
  PG13 = "PG-13",
  R = "R",
  RatedR = "R+",
  Rx = "Rx",
}

export enum Type {
  Movie = "Movie",
  Music = "Music",
  Ona = "ONA",
  Ova = "OVA",
  Special = "Special",
  Tv = "TV",
}
