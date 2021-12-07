import { NextPage } from "next";
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: NextPage<LayoutProps> = ({ children, title }) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);
  return (
    <>
      <div className="md:flex md:flex-row md:w-3/4 mx-auto text-gray-500 text-sm">
        <aside className="hidden md:flex items-center h-screen sticky top-0 w-1/4">
          <Sidebar
            toggleMobileMenu={toggleMobileMenu}
            setToggleMobileMenu={setToggleMobileMenu}
          />
        </aside>
        {toggleMobileMenu && (
          <aside className="block fixed bg-gray-100 h-screen z-50 w-1/2 shadow-sm md:hidden">
            <Sidebar
              toggleMobileMenu={toggleMobileMenu}
              setToggleMobileMenu={setToggleMobileMenu}
            />
          </aside>
        )}
        <div className="flex flex-col w-full">
          <main>
            <div className="flex flex-row items-center font-semibold text-indigo-600 text-xl sticky top-0 bg-gray-100 z-10 uppercase px-3">
              <div className="block md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="truncate">{title}</span>
            </div>
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
