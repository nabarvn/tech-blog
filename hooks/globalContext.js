import { useContext } from "react";
import featuredPostsContext from "../context/featuredPostsData";

const useGlobalContext = () => {
  return useContext(featuredPostsContext);
};

export default useGlobalContext;
