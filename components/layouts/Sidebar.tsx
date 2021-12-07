import { NextPage } from "next";
import { createRef, useEffect, useState } from "react";
import ActiveLink from "../ActiveLink";

interface SidebarProps {
  toggleMobileMenu: boolean;
  setToggleMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: NextPage<SidebarProps> = ({
  toggleMobileMenu,
  setToggleMobileMenu,
}) => {
  const [height, setHeight] = useState<any>();
  const ref = createRef<HTMLElement>();

  useEffect(() => {
    setHeight(ref.current?.clientHeight);
  }, [ref]);

  return (
    <>
      <nav
        ref={ref}
        className="px-3 w-full rounded-sm max-h-screen overflow-y-auto md:border-r border-indigo-500 border-opacity-20"
      >
        <div className="flex flex-col md:text-right text-sm">
          <div className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
            >
              <path
                fillRule="evenodd"
                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-5 flex flex-col">
            <ActiveLink
              href="/"
              activeClassName="px-3 border-r-2 border-indigo-500 md:px-2.5 -mx-3"
            >
              Home
            </ActiveLink>
            <ActiveLink
              href="/anime/search"
              activeClassName="px-3 border-r-2 border-indigo-500 md:px-2.5 -mx-3"
            >
              Search
            </ActiveLink>
          </div>
          <div className="flex flex-col">
            <div className="uppercase text-indigo-600 text-xl font-semibold mb-1">
              Anime
            </div>
            <ActiveLink
              href="/anime/top"
              activeClassName="px-3 border-r-2 border-indigo-500 md:px-2.5 -mx-3"
            >
              Top Anime
            </ActiveLink>
            <ActiveLink
              href="/anime/season"
              activeClassName="px-3 border-r-2 border-indigo-500 md:px-2.5 -mx-3"
            >
              Season
            </ActiveLink>
          </div>
          <div className="flex flex-col">
            <div className="uppercase text-indigo-600 text-xl font-semibold mt-5 mb-1">
              Manga
            </div>
            <ActiveLink
              href="/manga/top"
              activeClassName="px-3 border-r-2 border-indigo-500 md:px-2.5 -mx-3"
            >
              Top Manga
            </ActiveLink>
            <ActiveLink
              href="/manhua/top"
              activeClassName="px-3 border-r-2 border-indigo-500 md:px-2.5 -mx-3"
            >
              Top Manhua
            </ActiveLink>
            <ActiveLink
              href="/manhwa/top"
              activeClassName="px-3 border-r-2 border-indigo-500 md:px-2.5 -mx-3"
            >
              Top Manhwa
            </ActiveLink>
          </div>
          <div>
            <div className="uppercase text-indigo-600 text-xl font-semibold mt-5 mb-1">
              API
            </div>
            <p>
              <a
                href="https://jikan.moe"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-gray-400"
              >
                Jikan.moe
              </a>
            </p>
            <p>
              <a
                href="https://jikan.docs.apiary.io/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-gray-400"
              >
                Documentation
              </a>
            </p>
          </div>
          <div className="mt-5">
            <ActiveLink
              href="/about"
              activeClassName="px-3 border-r-2 border-indigo-500 md:px-2.5 -mx-3"
            >
              <span className="text-gray-400">About</span>
            </ActiveLink>
            <div>
              <span className="text-xs text-gray-400">© 2021 - Anmain</span>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="hidden md:block md:border-l border-white"
        style={{ height: height + "px" }}
      ></div>
    </>
  );
};

export default Sidebar;
