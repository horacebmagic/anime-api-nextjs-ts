import { InferGetServerSidePropsType } from "next";
import Layout from "../../components/layouts";
import HeadComponent from "../../components/HeadComponent";
import { BASE_URL_API, EndpointType } from "../../types";
import ImageCard from "../../components/ImageCard";
import { GetEndpoint } from "../../api_routes";
import { JikanResV4 } from "../../types/top_anime";
import { Type } from "../../types/";

const TopAnime = ({
  dataTop,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <HeadComponent title="Top Anime" param={false} description="Top Anime" />
      <Layout title="Top Anime">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 px-3">
          <ImageCard res={dataTop} type={Type.TV} />
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    BASE_URL_API + GetEndpoint(EndpointType.GET_TOP_ANIME)
  );
  const dataTop: JikanResV4 = await res.json();

  return {
    props: {
      dataTop,
    },
  };
};

export default TopAnime;
