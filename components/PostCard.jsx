import moment from "moment/moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className='bg-white dark:bg-night-gray shadow-lg group transition duration-300 dark:shadow-md hover:shadow-2xl dark:hover:shadow-night-teal rounded-lg p-0 lg:p-5 pb-9 lg:pb-3 mb-8 lg:mb-0 hover:cursor-pointer'>
      <Link href={`/post/${post.slug}`}>
        <div className='relative overflow-hidden md:shadow-md pb-48 mb-8'>
          <img
            src={post.thumbnail.url}
            alt={post.title}
            className='absolute h-48 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
          />
        </div>
        <h1 className='transition duration-300 text-center mb-8 cursor-pointer dark:text-night-white hover:text-blue-500 dark:group-hover:text-night-teal text-3xl lg:text-2xl font-semibold'>
          {/* <Link href={`/post/${post.slug}`}>{post.title}</Link> */}
          {post.title}
        </h1>
        <div className='flex flex-wrap items-center justify-center mb-8 w-full'>
          <div className='flex flex-wrap items-center mb-4 md:mb-0 md:w-auto mr-5 md:mr-9 ml-2'>
            <div>
              <img
                alt={post.author.name}
                height='25px'
                width='25px'
                className='align-middle rounded-full'
                src={post.author.image.url}
              />
            </div>
            <div>
              <p className='inline align-middle cursor-default text-gray-700 dark:text-night-teal ml-2 font-medium text-lg lg:text-sm'>
                {post.author.name}
              </p>
            </div>
          </div>
          <div className='flex flex-wrap items-center font-medium lg:text-sm text-gray-700 dark:text-night-teal mb-4 md:mb-0 mr-2'>
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
              <span className='align-middle cursor-default'>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>
        <p className='text-center cursor-pointer line-clamp-3 text-lg lg:text-sm text-gray-700 dark:text-gray-300 font-normal px-4 lg:px-10 mb-8'>
          {post.excerpt}
        </p>
      </Link>
      <div className='flex flex-wrap md:hidden float-right px-3'>
        {post.tags.map((tag) => (
          <div key={tag.slug} className='text-center'>
            <Link href={`/tag/${tag.slug}`}>
              <span className='inline-block ml-2 bg-blue-500 dark:bg-night-blue hover:bg-blue-900 dark:hover:bg-purple-900 text-xs font-semibold rounded-full text-white px-2 py-1 cursor-pointer'>
                {tag.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
