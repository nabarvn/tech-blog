import Navbar from "./Navbar";
import NextNProgress from "nextjs-progressbar";

const Layout = ({ children }) => {
  return (
    <>
      <NextNProgress
        color='linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
