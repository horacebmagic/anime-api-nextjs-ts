import { NextPage } from "next";
import Image from "next/image";
import { JikanResV4 } from "../types/top_anime";
import { Type } from "../types/";

interface ImageCardProps {
  res: JikanResV4;
  type: Type;
}

const ImageCard: NextPage<ImageCardProps> = ({ res, type }) => {
  return (
    <>
      {res !== undefined &&
        res?.data?.map((i) => (
          <div key={i.mal_id} className="w-full">
            <a
              href={`/${type.toLowerCase()}/${i.mal_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="truncate w-full bg-white rounded-sm mb-1 px-1 text-gray-500 shadow-sm hover:bg-indigo-500 hover:text-gray-100 cursor-pointer">
                <span>Rank: {i.rank + ". "}</span>
                <span>{i.title}</span>
              </div>
            </a>
            <Image
              src={i.images.jpg.image_url}
              alt={i.title}
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
