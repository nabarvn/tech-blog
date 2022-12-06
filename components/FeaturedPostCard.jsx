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
    <div className='flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full'>
      <p className='text-slate-900 dark:text-night-teal mb-6 md:mb-8 font-semibold text-xs'>
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className='text-violet-900 dark:text-night-white mb-14 md:mb-12 font-semibold text-xs md:text-2xl text-center'>
        {post.title}
      </p>
      <div className='flex items-center absolute bottom-5 w-full justify-center pb-2'>
        <Image
          unoptimized
          alt={post.author.name}
          height={21}
          width={21}
          className='align-middle drop-shadow-lg rounded-full'
          src={post.author.image.url}
        />
        <p className='inline align-middle text-slate-900 dark:text-night-teal text-sm ml-2 font-medium'>
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
