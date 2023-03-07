import { useEffect, useState, createContext } from "react";

import { getCategories, getFeaturedPosts, getTags } from "../services";

const appContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getFeaturedPosts().then((res) => {
      setFeaturedPosts(res);
    });

    getTags().then((res) => {
      setTags(res);
    });

    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <appContext.Provider value={{ featuredPosts, tags, categories }}>
      {children}
    </appContext.Provider>
  );
};

export default appContext;
