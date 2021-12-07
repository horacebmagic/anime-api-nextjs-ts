import { NextPage } from "next";
import HeadComponent from "../components/HeadComponent";
import Layout from "../components/layouts";

const About: NextPage = () => {
  return (
    <>
      <HeadComponent title="About" description="About Site" param={false} />
      <Layout>
        <div className="h-screen flex items-center px-3">
          <div className="text-xl font-light">
            <p>
              Anmain is a website where you can search information about anime,
              manga, manhua, and manwa.
            </p>
            <br />
            <p>
              Anmain is created for learning{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Next.js
              </a>
              . This website may still lack of features.
            </p>
            <p>
              Anmain is build with{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Next.js
              </a>
              ,{" "}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                TypeScript
              </a>
              , and{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Tailwindcss
              </a>
              .
            </p>
            <p>
              Anmain consume unofficial{" "}
              <a
                href="https://myanimelist.net/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Myanimelist
              </a>{" "}
              API from{" "}
              <a
                href="https://jikan.moe"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Jikan.moe
              </a>
              .
            </p>
            <br />
            <p className="text-sm font-normal text-gray-400">
              Github:{" "}
              <a
                href="https://github.com/horacebmagic/anime-api-nextjs-ts"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Anmain
              </a>
              <br />
              Me: email.rafihidayat@gmail.com -{" "}
              <a
                href="https://github.com/horacebmagic/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                horacebmagic
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
