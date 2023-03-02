import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FeaturedPostCard } from "../components";
import useGlobalContext from "../hooks/globalContext";

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

const CarouselViewer = () => {
  const { featuredPosts } = useGlobalContext();

  const CustomLeftArrow = ({ onClick }) => (
    <div onClick={() => onClick()} className='absolute left-0 cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='w-10 h-10 text-white transition duration-300 hover:stroke-black'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 19.5L8.25 12l7.5-7.5'
        />
      </svg>
    </div>
  );

  const CustomRightArrow = ({ onClick }) => (
    <div onClick={() => onClick()} className='absolute right-0 cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='w-10 h-10 text-white transition duration-300 hover:stroke-black'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.25 4.5l7.5 7.5-7.5 7.5'
        />
      </svg>
    </div>
  );

  return (
    <div>
      <Carousel
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
        itemClass='px-4'
        ssr={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={300}
        removeArrowOnDeviceType='mobile'
        showDots={true}
        dotListClass='custom-list'
        pauseOnHover={true}
        keyBoardControl={true}
      >
        {featuredPosts.map((post, index) => (
          <FeaturedPostCard key={index} post={post} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselViewer;
