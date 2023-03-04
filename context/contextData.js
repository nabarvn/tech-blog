import { useEffect, useState, createContext } from "react";

import {
  getCategories,
  getFeaturedPosts,
  getPosts,
  getTags,
} from "../services";

const appContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });

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
    <appContext.Provider value={{ posts, featuredPosts, tags, categories }}>
      {children}
    </appContext.Provider>
  );
};

export default appContext;
