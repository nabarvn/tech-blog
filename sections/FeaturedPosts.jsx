import { CarouselViewer } from "../components";

const FeaturedPosts = () => {
  return (
    <div className='hidden md:contents'>
      <div className='mb-8'>
        <CarouselViewer />
      </div>
    </div>
  );
};

export default FeaturedPosts;
