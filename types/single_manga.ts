export interface SingleManga {
  mal_id: number;
  url: string;
  title: string;
  title_english: string;
  title_synonyms: string[];
  title_japanese: string;
  status: string;
  image_url: string;
  type: string;
  volumes: null;
  chapters: null;
  publishing: boolean;
  published: Published;
  rank: number;
  score: number;
  scored_by: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  related: Related;
  genres: Genre[];
  explicit_genres: any[];
  demographics: any[];
  themes: any[];
  authors: Author[];
  serializations: Author[];
  external_links: ExternalLink[];
}

interface Author {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface ExternalLink {
  name: string;
  url: string;
}

interface Published {
  from: Date;
  to: null;
  prop: Prop;
  string: string;
}

interface Prop {
  from: From;
  to: From;
}

interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

interface Related {}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
