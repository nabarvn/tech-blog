import { ThemeProvider } from "next-themes";
import { Layout } from "../components";
import { GlobalContextProvider } from "../context/contextData";

import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import "../styles/nightOwl.scss";
import "../styles/reactToastify.scss";
import "../styles/reactTooltip.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalContextProvider>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
