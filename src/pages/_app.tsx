import type { AppProps } from "next/app";
import { JobsProvider } from "../hooks/useJobList";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JobsProvider>
      <Component {...pageProps} />
    </JobsProvider>
  );
}
