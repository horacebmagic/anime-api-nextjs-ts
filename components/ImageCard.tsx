import { NextPage } from "next";
import Image from "next/image";
import { TopAnimeResult, Type } from "../types/top_anime";
import { TopMangaResult } from "../types/top_manga";

interface ImageCardProps {
  res: TopAnimeResult | TopMangaResult;
  type: Type;
}

const ImageCard: NextPage<ImageCardProps> = ({ res, type }) => {
  return (
    <>
      {res !== undefined &&
        res?.top?.map((data) => (
          <div key={data.mal_id} className="w-full">
            <a
              href={`/${type.toLowerCase()}/${data.mal_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="truncate w-full bg-white rounded-sm mb-1 px-1 text-gray-500 shadow-sm hover:bg-indigo-500 hover:text-gray-100 cursor-pointer">
                <span>{data.rank + ". "}</span>
                <span>{data.title}</span>
              </div>
            </a>
            <Image
              src={data.image_url}
              alt={data.title}
              width={200}
              height={300}
              className="rounded-sm"
            />
          </div>
        ))}
    </>
  );
};

export default ImageCard;
