export interface AnimeSeason {
  season_name: string;
  season_year: number;
  anime: AnimeSeasonResult[];
}

export interface AnimeSeasonResult {
  mal_id: number;
  url: string;
  title: string;
  image_url: string;
  synopsis: string;
  type: AnimeType;
  airing_start: Date | null;
  episodes: number | null;
  members: number;
  genres: Demographic[];
  explicit_genres: Demographic[];
  themes: Demographic[];
  demographics: Demographic[];
  source: Source;
  producers: Demographic[];
  score: number | null;
  licensors: string[];
  r18: boolean;
  kids: boolean;
  continuing: boolean;
}

export interface Demographic {
  mal_id: number;
  type: DemographicType;
  name: string;
  url: string;
}

export enum DemographicType {
  Anime = "anime",
}

export enum Source {
  CardGame = "Card game",
  DigitalManga = "Digital manga",
  Empty = "-",
  Game = "Game",
  LightNovel = "Light novel",
  Manga = "Manga",
  Music = "Music",
  Novel = "Novel",
  Original = "Original",
  Other = "Other",
  PictureBook = "Picture book",
  The4KomaManga = "4-koma manga",
  VisualNovel = "Visual novel",
  WebManga = "Web manga",
}

export enum AnimeType {
  Movie = "Movie",
  Ona = "ONA",
  Ova = "OVA",
  Special = "Special",
  Tv = "TV",
}
