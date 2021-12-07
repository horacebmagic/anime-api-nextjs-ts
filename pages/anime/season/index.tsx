import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import HeadComponent from "../../../components/HeadComponent";
import Layout from "../../../components/layouts";
import Seasonsearch from "../../../components/SeasonSearch";
import { getSeason, seasons } from "../../../initial_data/years_seasons";
import { BASE_URL_API } from "../../../types";
import { AnimeSeason } from "../../../types/anime_season";
import Image from "next/image";

const Index = ({
  dataSeason,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const handleGoClick = (
    year: string | undefined = `${new Date().getUTCFullYear()}`,
    season: string | undefined
  ) => {
    router.push(`/anime/season/${year}/${season}`);
  };

  return (
    <>
      <HeadComponent
        title={`Anime Season ${new Date().getUTCFullYear()} - ${getSeason()}`}
        param={false}
        description={`Anime Season ${new Date().getUTCFullYear()} - ${getSeason()}`}
      />
      <Layout
        title={`Anime Season ${new Date().getUTCFullYear()} - ${getSeason()}`}
      >
        <div className="px-3">
          <Seasonsearch handleGoClick={handleGoClick} param={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
            {dataSeason?.anime
              ?.filter((anime) => anime.r18 === false)
              .map((anime) => (
                <div
                  key={anime.mal_id}
                  className="bg-white shadow-sm rounded-sm p-1 text-sm flex flex-row items-center space-x-3"
                >
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
                      <span className="font-semibold">{anime.title}</span>
                      <span className="text-xs">score: {anime.score}</span>
                      <span className="text-xs">Type: {anime.type}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    BASE_URL_API + `season/${new Date().getUTCFullYear()}/${getSeason()}`
  );
  const dataSeason: AnimeSeason = await res.json();

  return {
    props: {
      dataSeason,
    },
  };
};

export default Index;
