export interface TopAnimeResult {
  top: TopAnime[];
}

export interface TopAnime {
  mal_id: number;
  rank: number;
  title: string;
  url: string;
  type: Type;
  volumes: number | null;
  start_date: string;
  end_date: null | string;
  members: number;
  score: number;
  image_url: string;
}

export enum Type {
  TV = "Anime",
  Manga = "Manga",
  Manhua = "Manhua",
  Manhwa = "Manhwa",
  Light = "Light",
  Novel = "Novel",
}
