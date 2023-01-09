import type { AppProps } from "next/app";
import { JobsProvider } from "../hooks/useJobList";
import { UserConfigProvider } from "../hooks/useUserConfig";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserConfigProvider>
      <JobsProvider>
        <Component {...pageProps} />
      </JobsProvider>
    </UserConfigProvider>
  );
}
