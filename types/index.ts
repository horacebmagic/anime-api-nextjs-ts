import { JikanSearchResV4 } from "./anime_search";
import { AnimeSeasonResult } from "./anime_season";
import { SearchAnimeByGenreResult } from "./search_anime_by_genre";

export const BASE_URL_API: string = "https://api.jikan.moe/v4/";

export enum EndpointType {
  GET_TOP_ANIME,
  GET_TOP_MANGA,
  GET_TOP_MANHWA,
  GET_TOP_MANHUA,
  GET_ANIME_BY_GENRE,
}

interface DataMapping {
  id: number;
  name: string;
}

export interface GenreType extends DataMapping {
  isChecked: boolean;
}

export type ProducerType = DataMapping;

export interface ErrorResponse {
  status: number;
  type: string;
  message: string;
  error: string;
}

export interface GenericTypeFetcher<T> {
  (url: string): Promise<T>;
}

export interface HttpResponse {
  status: number;
  message: string;
}

export enum AnimeType {
  JikanSearchResV4 = "JikanSearchResV4",
  AnimeSeasonResult = "AnimeSeasonResult",
  SearchAnimeByGenreResult = "SearchAnimeByGenreResult",
}

export type AnimeTypeList = {
  JikanSearchResV4?: JikanSearchResV4;
  AnimeSeasonResult?: AnimeSeasonResult;
  SearchAnimeByGenreResult?: SearchAnimeByGenreResult;
};

export enum Type {
  TV = "Anime",
  Manga = "Manga",
  Manhua = "Manhua",
  Manhwa = "Manhwa",
  Light = "Light",
  Novel = "Novel",
}
