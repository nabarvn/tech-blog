import CarouselViewer from "./CarouselViewer";

const FeaturedPostsWidget = () => {
  return (
    <div className='md:hidden bg-white dark:bg-night-gray shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold dark:text-night-white border-b pb-4'>
        Featured Articles
      </h3>
      <CarouselViewer />
    </div>
  );
};

export default FeaturedPostsWidget;
