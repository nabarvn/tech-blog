import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative shadow-lg rounded-lg bg-sky-700 bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          alt={author.name}
          unoptimized
          height={100}
          width={100}
          className='align-middle mx-auto rounded-full'
          src={author.image.url}
        />
      </div>
      <h3 className='my-4 text-xl cursor-default font-bold'>{author.name}</h3>
      <p className='cursor-default text-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;
