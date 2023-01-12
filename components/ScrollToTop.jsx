import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const visibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", visibility);

    return () => window.removeEventListener("scroll", visibility);
  }, []);

  return (
    <div className='fixed bottom-14 right-7'>
      <Tooltip
        anchorId='scroll-to-top'
        content='Scroll to Top'
        place='top'
        className={`${!isVisible && "hidden"}`}
      />
      <button
        id='scroll-to-top'
        type='button'
        onClick={scrollToTop}
        className={`${
          !isVisible && "hidden"
        } inline-flex items-center p-2 rounded-lg shadow-sm bg-blue-500 hover:bg-blue-900 dark:bg-night-blue dark:hover:bg-blue-900 text-white dark:text-night-white focus:outline-none transition duration-300`}
      >
        <ArrowUpIcon className='h-5 w-5' aria-hidden='true' />
      </button>
    </div>
  );
};

export default ScrollToTop;
