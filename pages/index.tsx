import type { NextPage } from "next";
import HeadComponent from "../components/HeadComponent";
import Layout from "../components/layouts";

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent title="Home" param={false} />
      <Layout>
        <div className="h-screen flex items-center px-3">
          <div className="flex flex-col space-y-5">
            <p className="font-semibold text-4xl text-indigo-600 ">{`{`}</p>
            <p className="text-xl text-gray-500 px-3 antialiased font-light">
              Anmain (An[ime], Ma[nga,nhua,nhwa], In[formation]),
            </p>
            <p className="text-xl text-gray-500 px-3 antialiased font-light">
              Build with NextTS (NextJS with TypeScript),
            </p>
            <p className="text-xl text-gray-500 px-3 antialiased font-light">
              API using{" "}
              <a
                href="https://jikan.moe"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Jikan.moe
              </a>
              ,
            </p>
            <p className="font-semibold text-4xl text-indigo-600 ">{`}`}</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
