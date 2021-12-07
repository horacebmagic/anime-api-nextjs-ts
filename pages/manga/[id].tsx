import { InferGetServerSidePropsType } from "next";
import { apiroute_getSingleManga } from "../../api_routes";
import ErrorInfoComponent from "../../components/ErrorInfoComponent";
import HeadComponent from "../../components/HeadComponent";
import Layout from "../../components/layouts";
import { BASE_URL_API, HttpResponse } from "../../types";
import Image from "next/image";
import { SingleManga } from "../../types/single_manga";

const Manga = ({
  manga,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <HeadComponent
        title={manga?.title}
        description={`Manga: ${manga?.title}`}
        param={false}
      />
      <Layout title={manga?.title}>
        <div className="px-3">
          {manga?.status > 399 && (
            <ErrorInfoComponent message={manga?.message} />
          )}
          <div className="flex flex-col md:flex-row md:space-x-3">
            <div>
              {manga?.image_url && (
                <Image
                  src={manga?.image_url}
                  alt={manga?.title}
                  width={200}
                  height={300}
                  className="rounded-sm"
                />
              )}
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Title</span>
                <span className="w-9/12">{manga?.title}</span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Chapters</span>
                <span className="w-9/12">{manga?.chapters}</span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Score</span>
                <span className="w-9/12">
                  {manga?.score} by {manga?.scored_by} members
                </span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Members</span>
                <span className="w-9/12">{manga?.members}</span>
              </div>
              {typeof manga?.status !== "number" && (
                <div className="flex flex-row border-b">
                  <span className="font-bold w-3/12">Status</span>
                  <span className="w-9/12">{manga?.status}</span>
                </div>
              )}
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Authors</span>
                <span className="w-9/12">
                  {manga?.authors?.map((a) => a.name + ", ")}
                </span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Genre</span>
                <span className="w-9/12">
                  {manga?.genres?.map((a) => a.name + ", ")}
                </span>
              </div>
              <div className="flex flex-row border-b">
                <span className="font-bold w-3/12">Published</span>
                <span className="w-9/12">
                  {manga?.published?.from} - {manga?.published?.to}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 border-b"></div>
          <div className="mb-5 border-t border-white"></div>
          <div className="text-justify">
            <span className="font-bold">Synopsis</span>
            <br />
            {manga?.synopsis}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;
  const res = await fetch(BASE_URL_API + apiroute_getSingleManga(id));
  const manga: SingleManga & HttpResponse = await res.json();

  return {
    props: { manga },
  };
};

export default Manga;
