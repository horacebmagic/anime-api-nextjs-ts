import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { getSeason, seasons } from "../initial_data/years_seasons";

interface SeasonsearchProps {
  handleGoClick: (year: string | undefined, season: string | undefined) => void;
  param: boolean;
  pyear?: string;
  pseason?: string;
}

const Seasonsearch: NextPage<SeasonsearchProps> = ({
  handleGoClick,
  param,
  pyear,
  pseason,
}) => {
  const [year, setYear] = useState<string>(
    param === true && pyear ? pyear : `${new Date().getUTCFullYear()}`
  );
  const [season, setSeason] = useState<string>(
    param === true && pseason ? pseason : getSeason()
  );

  const handleGoOnClick = () => {
    handleGoClick(year, season);
  };

  return (
    <>
      <div className="flex flex-row space-x-1 bg-gray-100 sticky top-7 z-10">
        <input
          type="text"
          name="anime_name"
          placeholder="Year"
          autoComplete="off"
          className="bg-white w-full shadow-sm px-3 py-1 focus:outline-none rounded-sm"
          pattern="^\S+$"
          value={year}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setYear(e.target.value)
          }
        />
        <select
          onChange={(e) => setSeason(e.target.value)}
          value={season}
          name="season"
          className="bg-white rounded-sm shadow-sm px-3 py-1 cursor-pointer"
        >
          {seasons.map((value: string | number, index: number) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button
          className="bg-white w-full shadow-sm px-3 py-1 focus:outline-none rounded-sm hover:bg-indigo-500 hover:text-gray-100"
          onClick={handleGoOnClick}
        >
          Go
        </button>
      </div>
    </>
  );
};

export default Seasonsearch;
