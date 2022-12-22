import Navbar from "./Navbar";
import NextNProgress from "nextjs-progressbar";
import { Footer, ScrollToTop } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <NextNProgress
        color='linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))'
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
