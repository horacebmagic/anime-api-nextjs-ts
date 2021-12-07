import { NextPage } from "next";
import Image from "next/image";
import { AnimeType } from "../types";

interface SmallImageCardProps {
  anime: any;
  animeType: AnimeType;
}

const SmallImageCard: NextPage<SmallImageCardProps> = ({
  anime,
  animeType,
}) => {
  return (
    <>
      <div className="bg-white shadow-sm rounded-sm p-1 text-sm flex flex-row items-center space-x-3">
        <div className="w-2/12">
          <Image
            src={anime.image_url}
            alt={anime.title}
            width={70}
            height={80}
            className="rounded-sm"
          />
        </div>
        <div className="w-10/12 truncate">
          <div className="flex flex-col">
            <a href={`/anime/${anime.mal_id}`} target="_blank" rel="noreferrer">
              <span className="font-semibold hover:underline">
                {anime.title}
              </span>
            </a>
            <span className="text-xs">Score: {anime.score}</span>
            <span className="text-xs">Type: {anime.type}</span>
            {animeType === AnimeType.AnimeSeasonResult && (
              <span className="text-xs">
                Airing start: {anime.airing_start}
              </span>
            )}
            {(animeType === AnimeType.AnimeSearchResult ||
              animeType === AnimeType.SearchAnimeByGenreResult) && (
              <span className="text-xs">Start date: {anime.start_date}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallImageCard;
