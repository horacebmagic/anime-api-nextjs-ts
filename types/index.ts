import { AnimeSearchResult } from "./anime_search";
import { AnimeSeasonResult } from "./anime_season";
import { SearchAnimeByGenreResult } from "./search_anime_by_genre";

export const BASE_URL_API: string = "https://api.jikan.moe/v3/";

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
  AnimeSearchResult = "AnimeSearchResult",
  AnimeSeasonResult = "AnimeSeasonResult",
  SearchAnimeByGenreResult = "SearchAnimeByGenreResult",
}

export type AnimeTypeList = {
  AnimeSearchResult?: AnimeSearchResult;
  AnimeSeasonResult?: AnimeSeasonResult;
  SearchAnimeByGenreResult?: SearchAnimeByGenreResult;
};
