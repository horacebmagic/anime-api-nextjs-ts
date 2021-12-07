import { InferGetServerSidePropsType } from "next";
import { apiroute_getSingleAnime } from "../../api_routes";
import ErrorInfoComponent from "../../components/ErrorInfoComponent";
import HeadComponent from "../../components/HeadComponent";
import Layout from "../../components/layouts";
import { BASE_URL_API, HttpResponse } from "../../types";
import { SingleAnime } from "../../types/single_anime";
import Image from "next/image";

const Anime = ({
  anime,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <HeadComponent
        title={anime?.title}
        description={`Anime: ${anime?.title}`}
        param={false}
      />
      <Layout title={anime?.title}>
        <div className="px-3">
          {anime?.status > 399 && (
            <ErrorInfoComponent message={anime?.message} />
          )}
          <div className="flex flex-col md:flex-row md:space-x-3">
            <div>
              {anime?.image_url && (
                <Image
                  src={anime?.image_url}
                  alt={anime?.title}
                  width={200}
                  height={300}
                  className="rounded-sm"
                />
              )}
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Jp Title</span>
                <span className="w-9/12">{anime?.title_japanese}</span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">En Title</span>
                <span className="w-9/12">{anime?.title_english}</span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Score</span>
                <span className="w-9/12">
                  {anime?.score} by {anime?.scored_by} members
                </span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Members</span>
                <span className="w-9/12">{anime?.members}</span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Episodes</span>
                <span className="w-9/12">{anime?.episodes}</span>
              </div>
              {typeof anime?.status !== "number" && (
                <div className="flex flex-row border-b">
                  <span className="font-bold w-3/12">Status</span>
                  <span className="w-9/12">{anime?.status}</span>
                </div>
              )}
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Genre</span>
                <span className="w-9/12">
                  {anime?.genres?.map((a) => a.name + ", ")}
                </span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Producers</span>
                <span className="w-9/12">
                  {anime?.producers?.map((a) => a.name + ", ")}
                </span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Licensors</span>
                <span className="w-9/12">
                  {anime?.licensors?.map((a) => a.name + ", ")}
                </span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Studios</span>
                <span className="w-9/12">
                  {anime?.studios?.map((a) => a.name + ", ")}
                </span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Aired</span>
                <span className="w-9/12">
                  {anime?.aired?.from} - {anime?.aired?.to}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 border-b"></div>
          <div className="mb-5 border-t border-white"></div>
          <div className="text-justify">
            <span className="font-bold">Synopsis</span>
            <br />
            {anime?.synopsis}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;
  const res = await fetch(BASE_URL_API + apiroute_getSingleAnime(id));
  const anime: SingleAnime & HttpResponse = await res.json();

  return {
    props: { anime },
  };
};

export default Anime;
