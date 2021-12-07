export interface SingleAnime {
  mal_id: number;
  url: string;
  image_url: string;
  trailer_url: string;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null;
  premiered: string;
  broadcast: string;
  related: Related;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Genre[];
  explicit_genres: any[];
  demographics: Demographic[];
  themes: Demographic[];
  opening_themes: string[];
  ending_themes: string[];
  external_links: ExternalLink[];
}

interface Aired {
  from: Date;
  to: Date;
  prop: Prop;
  string: string;
}

interface Prop {
  from: From;
  to: From;
}

interface From {
  day: number;
  month: number;
  year: number;
}

interface Demographic {
  mal_id: number;
  type: Type;
  name: string;
  url: string;
}

enum Type {
  Anime = "anime",
  Manga = "manga",
}

interface ExternalLink {
  name: string;
  url: string;
}

interface Related {
  Adaptation: Demographic[];
  "Alternative version": Demographic[];
  "Side story": Demographic[];
  "Spin-off": Demographic[];
}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
