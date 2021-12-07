import { InferGetServerSidePropsType } from "next";
import Layout from "../../components/layouts";
import HeadComponent from "../../components/HeadComponent";
import ImageCard from "../../components/ImageCard";
import { BASE_URL_API, EndpointType } from "../../types";
import { GetEndpoint } from "../../api_routes";
import { TopMangaResult, Type } from "../../types/top_manga";

const TopManga = ({
  dataTop,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <HeadComponent title="Top Manga" param={false} description="Top Manga" />
      <Layout title="Top Manga">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 px-3">
          <ImageCard res={dataTop} type={Type.Manga} />
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    BASE_URL_API + GetEndpoint(1, EndpointType.GET_TOP_MANGA)
  );
  const dataTop: TopMangaResult = await res.json();

  return {
    props: {
      dataTop,
    },
  };
};

export default TopManga;
