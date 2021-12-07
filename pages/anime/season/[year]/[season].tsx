import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import HeadComponent from "../../../../components/HeadComponent";
import Layout from "../../../../components/layouts";
import { AnimeType, BASE_URL_API, HttpResponse } from "../../../../types";
import Image from "next/image";
import { AnimeSeason } from "../../../../types/anime_season";
import Seasonsearch from "../../../../components/SeasonSearch";
import ErrorInfoComponent from "../../../../components/ErrorInfoComponent";
import { res404 } from "../../../../initial_data/http_response";
import SmallImageCard from "../../../../components/SmallImageCard";

const Season = ({
  dataSeason,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { year, season } = router.query;

  const handleGoClick = (
    year: string | undefined,
    season: string | undefined
  ) => {
    router.push(`/anime/season/${year}/${season}`);
  };

  return (
    <>
      <HeadComponent
        title={`Anime Season ${year} - ${season}`}
        param={false}
        description={`Anime Season ${year} - ${season}`}
      />
      <Layout title={`Anime Season ${year} - ${season}`}>
        <div className="px-3">
          <Seasonsearch
            handleGoClick={handleGoClick}
            param={true}
            pyear={year as string}
            pseason={season as string}
          />
          {dataSeason?.status > 399 && (
            <ErrorInfoComponent message={dataSeason.message} />
          )}
          {dataSeason.anime?.length === 0 && (
            <ErrorInfoComponent message={res404.message} />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
            {dataSeason?.anime
              ?.filter((anime) => anime.r18 === false)
              .map((anime) => (
                <SmallImageCard
                  key={anime.mal_id}
                  anime={anime}
                  animeType={AnimeType.AnimeSeasonResult}
                />
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { year, season } = context.query;

  const res = await fetch(BASE_URL_API + `season/${year}/${season}`);
  const dataSeason: AnimeSeason & HttpResponse = await res.json();

  return {
    props: {
      dataSeason,
    },
  };
};

export default Season;
