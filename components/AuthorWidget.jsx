import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAuthor } from "../services";

const AuthorWidget = () => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    getAuthor().then((author) => setAuthor(author));
  }, []);

  return (
    <div className='bg-white dark:bg-night-gray text-center shadow-lg rounded-lg bg-opacity-20 mb-8 p-8 lg:p-6'>
      <Link href='https://supercoder.vercel.app' className='cursor-default'>
        <Image
          alt='Nabarun.eth'
          unoptimized
          height={75}
          width={75}
          className='align-middle mx-auto cursor-pointer rounded-full hover:ring-2 hover:ring-blue-500 dark:hover:ring-night-blue transition duration-300'
          src='/nabarun.png'
        />
      </Link>
      <div className='my-4'>
        <Link
          href='https://supercoder.vercel.app'
          className='text-xl font-bold hover:text-blue-500 dark:hover:text-night-teal transition duration-300'
        >
          {author.name}
        </Link>
      </div>
      <p className='cursor-default text-lg font-semibold dark:text-gray-300'>
        {author.bio}
      </p>
    </div>
  );
};

export default AuthorWidget;
