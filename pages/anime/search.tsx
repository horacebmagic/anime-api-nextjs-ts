import { ChangeEvent, createRef, LegacyRef, useEffect, useState } from "react";
import HeadComponent from "../../components/HeadComponent";
import InputCheckbox from "../../components/InputCheckbox";
import Layout from "../../components/layouts";
import {
  AnimeType,
  BASE_URL_API,
  GenericTypeFetcher,
  GenreType,
  HttpResponse,
} from "../../types";
import { Genres } from "../../initial_data/genres_mapping";
import {
  apiroute_getAnimeByGenre,
  apiroute_getAnimeByName,
} from "../../api_routes";
import useSWR from "swr";
import { JikanSearchResV4, Rating } from "../../types/anime_search";
import Image from "next/image";
import { SearchAnimeByGenre } from "../../types/search_anime_by_genre";
import Fetcher from "../../fetchers";
import ErrorInfoComponent from "../../components/ErrorInfoComponent";
import { res404 } from "../../initial_data/http_response";
import SmallImageCard from "../../components/SmallImageCard";

const Search = () => {
  //state
  const [genres, setGenres] = useState<GenreType[]>(Genres);
  const [genreFilter, setGenreFilter] = useState<string>("");
  const [submitedGenreFilter, setSubmitedGenreFilter] = useState<string>("");
  const [toogleGenreFilter, setToogleGenreFilter] = useState<boolean>(false);
  const [querySearch, setQuerySearch] = useState<string>("");
  const [submitedQuerySearch, setSubmitedQuerySearch] = useState<string>("");
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  //end

  //request api call: anime by name
  const searchAnimeByNameFetcher: GenericTypeFetcher<JikanSearchResV4> =
    Fetcher;
  const {
    data: animeResultByName,
    isValidating: isValidatingSearchByName,
    error: errorSearchByName,
    mutate: mutateSearchByName,
  } = useSWR<JikanSearchResV4, HttpResponse>(
    (): string | null => {
      if (submitedQuerySearch && submitedQuerySearch.length >= 3) {
        return BASE_URL_API + apiroute_getAnimeByName(submitedQuerySearch);
      } else {
        return null;
      }
    },
    searchAnimeByNameFetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onError() {
        setErrorMessage(errorSearchByName?.message);
        if (errorSearchByName?.status === 503) {
          setTimeout(() => {
            mutateSearchByName((v) => v, false);
            setSubmitedQuerySearch("");
            setPageIndex(1);
          }, 5000);
        } else if (errorSearchByName?.status == 404) {
          setSubmitedQuerySearch("");
          setPageIndex(1);
        }
      },
    }
  );
  //end

  //request api call: search anime by genre(s)
  const searchAnimeByGenreFetcher: GenericTypeFetcher<JikanSearchResV4> =
    Fetcher;
  const {
    data: animeResultByGenre,
    isValidating: isValidatingSearchByGenre,
    error: errorSearchByGenre,
    mutate: mutateSearchByGenre,
  } = useSWR<JikanSearchResV4, HttpResponse>(
    (): string | null => {
      if (
        (submitedGenreFilter && !submitedQuerySearch) ||
        (submitedGenreFilter && submitedQuerySearch.length >= 3)
      ) {
        return (
          BASE_URL_API +
          apiroute_getAnimeByGenre(submitedQuerySearch, submitedGenreFilter)
        );
      } else {
        return null;
      }
    },
    searchAnimeByGenreFetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onError() {
        setErrorMessage(errorSearchByGenre?.message);
        if (errorSearchByGenre?.status === 503) {
          setTimeout(() => {
            mutateSearchByGenre((v) => v, false);
            setSubmitedGenreFilter("");
            setSubmitedQuerySearch("");
            setPageIndex(1);
          }, 5000);
        } else if (errorSearchByName?.status == 404) {
          setSubmitedGenreFilter("");
          setSubmitedQuerySearch("");
          setPageIndex(1);
        }
      },
    }
  );
  //end

  //methods
  const handleOnChange = (id: number) => {
    const newGenres: GenreType[] = genres.map((genre) => {
      if (genre.id === id) return { ...genre, isChecked: !genre.isChecked };
      return genre;
    });
    setGenres([...newGenres]);
  };

  useEffect(() => {
    const newGenreFilter = genres
      .filter(({ isChecked }) => isChecked === true)
      .map(({ id }) => id);
    setGenreFilter(newGenreFilter.join());
  }, [genres]);

  useEffect(() => {
    if (isValidatingSearchByName || isValidatingSearchByGenre) {
      setErrorMessage("");
    }
  }, [isValidatingSearchByName, isValidatingSearchByGenre]);
  //end

  return (
    <>
      <HeadComponent
        title="Anime Search"
        param={false}
        description="Anime Search"
      />
      <Layout
        title={
          pageIndex === 1 ? `Anime Search` : `Anime Search - Page: ${pageIndex}`
        }
      >
        <div className="px-3">
          <div className="flex flex-row space-x-1 bg-gray-100 sticky top-7 z-10">
            {animeResultByName !== undefined && pageIndex > 1 && (
              <>
                <div>
                  <button
                    className="bg-white rounded-sm shadow-sm px-3 py-1 cursor-pointer hover:bg-indigo-500 hover:text-gray-100"
                    onClick={() => setPageIndex(pageIndex - 1)}
                  >
                    {"<"}
                  </button>
                </div>
              </>
            )}
            <input
              type="text"
              name="anime_name"
              placeholder="Enter to search anime"
              autoComplete="off"
              className="bg-white w-full shadow-sm px-3 py-1 focus:outline-none rounded-sm"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setQuerySearch(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && setSubmitedQuerySearch(querySearch)
              }
            />
            <button
              className={`${
                genreFilter !== "" && "bg-indigo-500 text-gray-100"
              } bg-white rounded-sm shadow-sm px-3 py-1 cursor-pointer hover:bg-indigo-500 hover:text-gray-100`}
              onClick={() => setToogleGenreFilter(!toogleGenreFilter)}
            >
              Genres
            </button>
            {animeResultByName !== undefined &&
              animeResultByName.pagination.last_visible_page > 1 && (
                <button
                  className="bg-white rounded-sm shadow-sm px-3 py-1 cursor-pointer hover:bg-indigo-500 hover:text-gray-100"
                  onClick={() => setPageIndex(pageIndex + 1)}
                >
                  {">"}
                </button>
              )}
          </div>
          {toogleGenreFilter && (
            <div className="sticky top-14 z-10">
              <div className="grid grid-cols-3 md:grid-cols-7 gap-1">
                {genres.map((data) => (
                  <div
                    key={data.id}
                    className="bg-indigo-400 text-gray-100 shadow-sm rounded-sm p-1 text-xs"
                  >
                    <InputCheckbox
                      id={data.id}
                      value={data.id}
                      handleOnChange={() => handleOnChange(data.id)}
                      isChecked={data.isChecked}
                    />
                    <label
                      htmlFor={`genre-${data.id}`}
                      className="cursor-pointer"
                    >
                      {" "}
                      {data.name}
                    </label>
                  </div>
                ))}
                <button
                  className="bg-indigo-400 text-gray-100 shadow-sm rounded-sm p-1 text-xs hover:bg-indigo-500"
                  onClick={() => setSubmitedGenreFilter(genreFilter)}
                  disabled={isValidatingSearchByGenre}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
          {(isValidatingSearchByName || isValidatingSearchByGenre) && (
            <div>Please wait while request...</div>
          )}
          {errorMessage && <ErrorInfoComponent message={errorMessage} />}
          {(animeResultByGenre?.data.length === 0 ||
            animeResultByName?.data.length === 0) && (
            <ErrorInfoComponent message={res404.message} />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
            {animeResultByGenre === undefined ? (
              <>
                {animeResultByName?.data
                  ?.filter((anime) => anime.rating !== Rating.RMildNudity)
                  .map((anime) => (
                    <SmallImageCard
                      key={anime.mal_id}
                      anime={anime}
                      animeType={AnimeType.JikanSearchResV4}
                    />
                  ))}
              </>
            ) : (
              <>
                {animeResultByGenre?.data?.map((anime) => (
                  <SmallImageCard
                    key={anime.mal_id}
                    anime={anime}
                    animeType={AnimeType.SearchAnimeByGenreResult}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
