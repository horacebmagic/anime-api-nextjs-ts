// export interface AnimeSeason {
//   season_name: string;
//   season_year: number;
//   anime: AnimeSeasonResult[];
// }

// export interface AnimeSeasonResult {
//   mal_id: number;
//   url: string;
//   title: string;
//   image_url: string;
//   synopsis: string;
//   type: AnimeType;
//   airing_start: Date | null;
//   episodes: number | null;
//   members: number;
//   genres: Demographic[];
//   explicit_genres: Demographic[];
//   themes: Demographic[];
//   demographics: Demographic[];
//   source: Source;
//   producers: Demographic[];
//   score: number | null;
//   licensors: string[];
//   r18: boolean;
//   kids: boolean;
//   continuing: boolean;
// }

// export interface Demographic {
//   mal_id: number;
//   type: DemographicType;
//   name: string;
//   url: string;
// }

// export enum DemographicType {
//   Anime = "anime",
// }

// export enum Source {
//   CardGame = "Card game",
//   DigitalManga = "Digital manga",
//   Empty = "-",
//   Game = "Game",
//   LightNovel = "Light novel",
//   Manga = "Manga",
//   Music = "Music",
//   Novel = "Novel",
//   Original = "Original",
//   Other = "Other",
//   PictureBook = "Picture book",
//   The4KomaManga = "4-koma manga",
//   VisualNovel = "Visual novel",
//   WebManga = "Web manga",
// }

// export enum AnimeType {
//   Movie = "Movie",
//   Ona = "ONA",
//   Ova = "OVA",
//   Special = "Special",
//   Tv = "TV",
// }

export interface JikanSeasonResV4 {
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
  source: string;
  episodes: number;
  status: Status;
  airing: boolean;
  aired: Aired;
  duration: Duration;
  rating: Rating;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null | string;
  season: Season;
  year: number;
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
  to: Date;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: Timezone;
  string: string;
}

export enum Timezone {
  AsiaTokyo = "Asia/Tokyo",
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

export enum Duration {
  The23MinPerEp = "23 min per ep",
  The24MinPerEp = "24 min per ep",
  The26MinPerEp = "26 min per ep",
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

export enum Season {
  Winter = "winter",
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
  Japanese = "Japanese",
  Synonym = "Synonym",
}

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Images;
}

export interface Images {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

export enum Type {
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
