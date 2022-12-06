import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import { Layout } from "../components";
import "../styles/globals.scss";
import { FeaturedPostsProvider } from "../context/featuredPostsData";

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
