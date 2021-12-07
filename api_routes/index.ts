import { EndpointType } from "../types";

export const GetEndpoint = (
  page_id: number,
  endpoint_type: EndpointType,
  query?: string,
  genre?: string
): string => {
  switch (endpoint_type) {
    case EndpointType.GET_TOP_ANIME:
      return `top/anime/${page_id}/`;
    case EndpointType.GET_TOP_MANGA:
      return `top/manga/${page_id}/`;
    case EndpointType.GET_TOP_MANHUA:
      return `top/manga/${page_id}/manhua/`;
    case EndpointType.GET_TOP_MANHWA:
      return `top/manga/${page_id}/manhwa/`;
    case EndpointType.GET_ANIME_BY_GENRE:
      return `search/anime?q=${query}/page=${page_id}/genre=${genre}`;
    default:
      return "";
  }
};

export const apiroute_getSingleAnime = (id: number): string => {
  return `anime/${id}`;
};

export const apiroute_getSingleManga = (id: number): string => {
  return `manga/${id}`;
};

export const apiroute_getAnimeByName = (
  query: string,
  page_id: number
): string => {
  return `search/anime?q=${query}&page=${page_id}&order_by=title`;
};

export const apiroute_getAnimeByGenre = (
  page_id: number,
  query: string,
  genre: string
): string => {
  return `search/anime?q=${query}&page=${page_id}&genre=${genre}&order_by=title`;
};
