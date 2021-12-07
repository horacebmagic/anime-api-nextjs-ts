import { HttpResponse } from "../types";

export const res404: HttpResponse = {
  status: 404,
  message: "Resource does not exist",
};

export const res503: HttpResponse = {
  status: 503,
  message:
    "Jikan API failed to connect to MyAnimeList. MyAnimeList may be down/unavailable or refuses to connect. You can try again after 5 seconds",
};
