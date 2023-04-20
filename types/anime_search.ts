// export interface AnimeSearch {
//   results: AnimeSearchResult[];
//   last_page: number;
// }

// export interface AnimeSearchResult {
//   mal_id: number;
//   url: string;
//   image_url: string;
//   title: string;
//   airing: boolean;
//   synopsis: string;
//   type: Type;
//   episodes: number;
//   score: number;
//   start_date: Date | null;
//   end_date: Date | null;
//   members: number;
//   rated: Rated | null;
// }

// export enum Rated {
//   G = "G",
//   PG = "PG",
//   PG13 = "PG-13",
//   R = "R",
//   RatedR = "R+",
//   Rx = "Rx",
// }

// export enum Type {
//   Movie = "Movie",
//   Music = "Music",
//   Ona = "ONA",
//   Ova = "OVA",
//   Special = "Special",
//   Tv = "TV",
// }

export interface JikanSearchResV4 {
  pagination: Pagination;
  data: Data[];
}

export interface Data {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: Type;
  source: Source;
  episodes: number;
  status: Status;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: Rating;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null | string;
  season: null | string;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: Demographic[];
  demographics: Demographic[];
}

export interface Aired {
  from: Date;
  to: Date | null;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface Broadcast {
  day: null | string;
  time: null | string;
  timezone: null | string;
  string: null | string;
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

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export enum Rating {
  PG13Teens13OrOlder = "PG-13 - Teens 13 or older",
  R17ViolenceProfanity = "R - 17+ (violence & profanity)",
  RMildNudity = "R+ - Mild Nudity",
}

export enum Source {
  Game = "Game",
  LightNovel = "Light novel",
  Manga = "Manga",
  Original = "Original",
}

export enum Status {
  FinishedAiring = "Finished Airing",
}

export interface Title {
  type: TitleType;
  title: string;
}

export enum TitleType {
  Default = "Default",
  English = "English",
  French = "French",
  German = "German",
  Japanese = "Japanese",
  Spanish = "Spanish",
  Synonym = "Synonym",
}

export interface Trailer {
  youtube_id: null | string;
  url: null | string;
  embed_url: null | string;
  images: Images;
}

export interface Images {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
}

export enum Type {
  Movie = "Movie",
  Ona = "ONA",
  Special = "Special",
  Tv = "TV",
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export interface Items {
  count: number;
  total: number;
  per_page: number;
}
