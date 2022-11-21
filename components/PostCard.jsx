import moment from "moment/moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden md:shadow-md pb-48 md:pb-80 mb-8'>
        <img
          src={post.thumbnail.url}
          alt={post.title}
          className='absolute h-48 md:h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <h1 className='transition duration-300 text-center mb-8 cursor-pointer hover:text-blue-500 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='flex flex-wrap items-center justify-center mb-8 w-full'>
        <div className='flex flex-wrap items-center mb-4 md:mb-0 md:w-auto mr-5 md:mr-9 ml-2'>
          <div>
            <img
              alt={post.author.name}
              height='30px'
              width='30px'
              className='align-middle rounded-full'
              src={post.author.image.url}
            />
          </div>
          <div>
            <p className='inline align-middle text-gray-700 ml-2 font-medium text-lg'>
              {post.author.name}
            </p>
          </div>
        </div>
        <div className='flex flex-wrap items-center font-medium text-gray-700 mb-4 md:mb-0 mr-2'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 inline mr-2 text-blue-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          </div>
          <div>
            <span className='align-middle'>
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
        {post.excerpt}
      </p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-300 transform hover:-translate-y-1 inline-block bg-blue-500 text-lg font-medium rounded-full text-white px-4 py-2 cursor-pointer'>
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
