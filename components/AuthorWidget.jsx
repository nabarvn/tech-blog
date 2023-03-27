import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { Tooltip } from "react-tooltip";
import { getAuthor } from "../services";

const AuthorWidget = () => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    getAuthor().then((author) => setAuthor(author));
  }, []);

  return (
    <div className='bg-white dark:bg-night-gray text-center shadow-md rounded-lg mb-8 p-8 lg:p-6'>
      <Link href='https://nabarun.xyz' className='cursor-default'>
        <Image
          alt='Nabarun.eth'
          unoptimized
          height={75}
          width={75}
          className='align-middle mx-auto cursor-pointer rounded-full hover:ring-2 hover:ring-blue-500 dark:hover:ring-night-blue transition duration-300'
          src='/nabarun.png'
        />
      </Link>
      <div className='my-3'>
        <Link
          href='https://nabarun.xyz'
          className='text-xl font-bold hover:text-blue-500 dark:hover:text-night-teal transition duration-300'
        >
          {author.name}
        </Link>
      </div>
      <div className='flex justify-center mb-3'>
        <div
          id='twitter-logo'
          className='cursor-pointer bg-white dark:bg-night-gray hover:bg-light-gray dark:hover:bg-night-black transition duration-300 rounded-lg p-1.5 md:p-2'
        >
          <a href='https://www.twitter.com/nabarvn' target='_blank'>
            <RxTwitterLogo className='text-twitter-blue dark:text-slate-400 h-5 w-5' />
          </a>
        </div>
        <div
          id='github-logo'
          className='cursor-pointer bg-white dark:bg-night-gray hover:bg-light-gray dark:hover:bg-night-black transition duration-300 rounded-lg p-1.5 md:p-2'
        >
          <a href='https://www.github.com/nabarvn' target='_blank'>
            <RxGithubLogo className='text-github-black dark:text-slate-400 h-5 w-5' />
          </a>
        </div>
        <div
          id='linkedin-logo'
          className='cursor-pointer bg-white dark:bg-night-gray hover:bg-light-gray dark:hover:bg-night-black transition duration-300 rounded-lg p-1.5 md:p-2'
        >
          <a href='https://www.linkedin.com/in/nabarvn' target='_blank'>
            <RxLinkedinLogo className='text-linkedin-blue dark:text-slate-400 h-5 w-5' />
          </a>
        </div>

        <Tooltip anchorId='twitter-logo' content='Twitter' place='top' />
        <Tooltip anchorId='github-logo' content='Github' place='top' />
        <Tooltip anchorId='linkedin-logo' content='Linkedin' place='top' />
      </div>
      <p className='cursor-default text-base font-semibold dark:text-gray-300'>
        {author.bio}
      </p>
    </div>
  );
};

export default AuthorWidget;
