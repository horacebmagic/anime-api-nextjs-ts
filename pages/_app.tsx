import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/nprogress.css";
import Router from "next/router";
import nProgress from "nprogress";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on("routeChangeStart", nProgress.start);
    Router.events.on("routeChangeError", nProgress.done);
    Router.events.on("routeChangeComplete", nProgress.done);

    return () => {
      Router.events.on("routeChangeStart", nProgress.start);
      Router.events.on("routeChangeError", nProgress.done);
      Router.events.on("routeChangeComplete", nProgress.done);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
