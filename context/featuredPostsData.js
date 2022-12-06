import { useEffect, useState, createContext } from "react";
import { getFeaturedPosts } from "../services";

const featuredPostsContext = createContext();

export const FeaturedPostsProvider = ({ children }) => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((res) => {
      setFeaturedPosts(res);
      setDataLoaded(true);
    });
  }, []);

  return (
    <featuredPostsContext.Provider value={{ featuredPosts, dataLoaded }}>
      {children}
    </featuredPostsContext.Provider>
  );
};

export default featuredPostsContext;
