import { InferGetServerSidePropsType } from "next";
import { apiroute_getSingleAnime } from "../../api_routes";
import ErrorInfoComponent from "../../components/ErrorInfoComponent";
import HeadComponent from "../../components/HeadComponent";
import Layout from "../../components/layouts";
import { BASE_URL_API, HttpResponse } from "../../types";
import Image from "next/image";
import { AnimeByIDFull } from "../../types/anime_by_id_full";

const Anime = ({
  anime,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      {anime?.status > 399 ? (
        <>
          <HeadComponent
            title={anime?.status + ""}
            description={`Anime: ${anime?.status + ""}`}
            param={false}
          />
          <Layout title={anime?.status + ""}>
            <div className="px-3">
              <ErrorInfoComponent message={anime?.message} />
            </div>
          </Layout>
        </>
      ) : (
        <>
          <HeadComponent
            title={anime?.data.title_english}
            description={`Anime: ${anime?.data.title_english}`}
            param={false}
          />
          <Layout title={anime?.data.title_english}>
            <div className="px-3">
              <div className="flex flex-col md:flex-row md:space-x-3">
                <div>
                  {anime?.data.images.jpg.image_url && (
                    <Image
                      src={anime?.data.images.jpg.image_url + ""}
                      alt={anime?.data.title_english}
                      width={200}
                      height={300}
                      className="rounded-sm"
                    />
                  )}
                </div>
                <div className="flex flex-col space-y-1 w-full">
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">Jp Title</span>
                    <span className="w-9/12">{anime?.data.title_japanese}</span>
                  </div>
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">En Title</span>
                    <span className="w-9/12">{anime?.data.title_english}</span>
                  </div>
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">Score</span>
                    <span className="w-9/12">
                      {anime?.data.score} by {anime?.data.scored_by} members
                    </span>
                  </div>
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">Rank</span>
                    <span className="w-9/12">{anime?.data.rank}</span>
                  </div>
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">Members</span>
                    <span className="w-9/12">{anime?.data.members}</span>
                  </div>
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">Episodes</span>
                    <span className="w-9/12">{anime?.data.episodes}</span>
                  </div>
                  {typeof anime?.data.status !== "number" && (
                    <div className="flex flex-row border-b">
                      <span className="font-bold w-3/12">Status</span>
                      <span className="w-9/12">{anime?.data.status}</span>
                    </div>
                  )}
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">Genre</span>
                    <span className="w-9/12">
                      {anime?.data.genres?.map((a) => a.name + ", ")}
                    </span>
                  </div>
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">Producers</span>
                    <span className="w-9/12">
                      {anime?.data.producers?.map((a) => a.name + ", ")}
                    </span>
                  </div>
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">Licensors</span>
                    <span className="w-9/12">
                      {anime?.data.licensors?.map((a) => a.name + ", ")}
                    </span>
                  </div>
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">Studios</span>
                    <span className="w-9/12">
                      {anime?.data.studios?.map((a) => a.name + ", ")}
                    </span>
                  </div>
                  <div className="flex flex-row border-b">
                    <span className="font-bold w-3/12">Aired</span>
                    <span className="w-9/12">
                      {anime?.data.aired?.from} - {anime?.data.aired?.to}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-5 border-b"></div>
              <div className="mb-5 border-t border-white"></div>
              <div className="text-justify">
                <span className="font-bold">Synopsis</span>
                <br />
                {anime?.data.synopsis}
              </div>
            </div>
          </Layout>
        </>
      )}
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;
  const res = await fetch(BASE_URL_API + apiroute_getSingleAnime(id));
  const anime: AnimeByIDFull & HttpResponse = await res.json();

  return {
    props: { anime },
  };
};

export default Anime;
