import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1440, min: 999 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 999, min: 425 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((res) => {
      setFeaturedPosts(res);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <div className='absolute arrow-btn left-0 py-1 cursor-pointer bg-blue-500 rounded-full'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='text-white'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M10 19l-7-7m0 0l7-7m-7 7h18'
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className='absolute arrow-btn right-0 py-1 cursor-pointer bg-blue-500 rounded-full'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='text-white'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M14 5l7 7m0 0l-7 7m7-7H3'
        />
      </svg>
    </div>
  );

  return (
    <div className='mb-8'>
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass='px-4'
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
