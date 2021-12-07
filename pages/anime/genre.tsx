import HeadComponent from "../../components/HeadComponent";
import Layout from "../../components/layouts";
import { Genres } from "../../initial_data/genres_mapping";

const Genre = () => {
  return (
    <>
      <HeadComponent title="Genre" description="Anime Genre" param={false} />
      <Layout>
        <div className="h-screen flex items-center px-3">
          <div className="grid grid-cols-4 gap-3">
            {Genres.map((data) => (
              <div
                key={data.id}
                className="bg-white rounded-sm shadow-sm p-1 hover:bg-indigo-500 hover:text-gray-100 cursor-pointer transition duration-50 ease-linear"
              >
                {data.name}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Genre;
