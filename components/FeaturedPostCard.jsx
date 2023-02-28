import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => (
  <div className='relative h-36 md:h-48'>
    <div
      className='absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-36 md:h-48'
      // style={{
      //   backgroundImage: `url('${post.thumbnail.url}')`,
      // }}
    />
    <div className='absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-blue-600 via-blue-900 to-violet-900 w-full h-36 md:h-48' />
    <div className='flex flex-col rounded-lg p-4 items-center justify-around absolute w-full h-full'>
      <div className='absolute top-5 text-slate-900 dark:text-night-teal font-medium text-xs md:text-sm'>
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </div>
      <div className='text-violet-900 dark:text-night-white font-semibold text-sm md:text-xl text-center'>
        {post.title}
      </div>
      <div className='flex absolute bottom-3 xl:bottom-5 items-center w-full justify-center mb-2'>
        <Image
          unoptimized
          alt={post.author.name}
          height={21}
          width={21}
          className='align-middle drop-shadow-lg rounded-full h-4 w-4 md:h-5 md:w-5'
          src={post.author.image.url}
        />
        <p className='inline align-middle text-slate-900 dark:text-night-teal text-xs md:text-sm ml-2 font-medium'>
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className='cursor-pointer absolute w-full h-full' />
    </Link>
  </div>
);

export default FeaturedPostCard;
