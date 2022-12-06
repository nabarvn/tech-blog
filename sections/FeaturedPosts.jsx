import { CarouselViewer } from "../components";

const FeaturedPosts = () => {
  return (
    <div className='hidden md:contents'>
      <div className='border-b pb-8 mb-8'>
        <CarouselViewer />
      </div>
    </div>
  );
};

export default FeaturedPosts;
