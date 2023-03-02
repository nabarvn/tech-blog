import { useContext } from "react";
import appContext from "../context/contextData";

const useGlobalContext = () => {
  return useContext(appContext);
};

export default useGlobalContext;
