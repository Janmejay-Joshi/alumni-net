import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navigation from "../components/reusables/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
