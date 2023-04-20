import { EndpointType } from "../types";

export const GetEndpoint = (
  endpoint_type?: EndpointType,
  page_id?: number,
  query?: string,
  genre?: string
): string => {
  switch (endpoint_type) {
    case EndpointType.GET_TOP_ANIME:
      return `top/anime/`;
    case EndpointType.GET_TOP_MANGA:
      return `top/manga/`;
    case EndpointType.GET_TOP_MANHUA:
      return `top/manga?type=manhua`;
    case EndpointType.GET_TOP_MANHWA:
      return `top/manga?type=manhwa`;
    case EndpointType.GET_ANIME_BY_GENRE:
      return `anime?q=${query}&order_by=${"rank"}&genre=${genre}&sort=asc&sfw`;
    default:
      return "";
  }
};

//https://api.jikan.moe/v4/anime?q=sword&order_by=popularity&genre=action,fantasy&sort=asc&sfw

export const apiroute_getSingleAnime = (id: number): string => {
  return `anime/${id}`;
};

export const apiroute_getSingleManga = (id: number): string => {
  return `manga/${id}`;
};

export const apiroute_getAnimeByName = (query: string): string => {
  return `anime?q=${query}&order_by=popularity&sort=asc&sfw`;
};

export const apiroute_getAnimeByGenre = (
  query: string,
  genre: string
): string => {
  return `anime?q=${query}&genre=${genre}&order_by=popularity&sort=asc&sfw`;
};
