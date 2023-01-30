import Image from "next/image";
import Link from "next/link";

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative shadow-lg rounded-lg bg-sky-700 bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Link
          href='https://supercoder.vercel.app'
          target='_blank'
          className='cursor-default'
        >
          <Image
            alt={author.name}
            unoptimized
            height={100}
            width={100}
            className='align-middle mx-auto cursor-pointer rounded-full hover:ring-2 hover:ring-blue-500 dark:hover:ring-night-blue transition duration-300'
            src={author.image.url}
          />
        </Link>
      </div>
      <div className='my-4'>
        <Link
          href='https://supercoder.vercel.app'
          target='_blank'
          className='text-xl font-bold hover:text-blue-500 dark:hover:text-night-teal transition duration-300'
        >
          {author.name}
        </Link>
      </div>
      <p className='cursor-default text-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;
