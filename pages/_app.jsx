import { ThemeProvider } from "next-themes";
import { Layout } from "../components";
import { FeaturedPostsProvider } from "../context/featuredPostsData";

import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import "../styles/nightOwl.scss";
import "../styles/reactToastify.scss";
import "../styles/reactTooltip.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FeaturedPostsProvider>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </FeaturedPostsProvider>
    </>
  );
}

export default MyApp;
