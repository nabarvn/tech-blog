import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

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
    <div className='fixed bottom-7 right-7'>
      <button
        type='button'
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } inline-flex items-center p-2 rounded-lg shadow-sm bg-blue-500 hover:bg-blue-900 dark:bg-night-blue dark:hover:bg-blue-900 text-white dark:text-night-white focus:outline-none transition duration-300`}
      >
        <ArrowUpIcon className='h-4 w-4' aria-hidden='true' />
      </button>
    </div>
  );
};

export default ScrollToTop;
