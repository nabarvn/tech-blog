import Head from "next/head";

import {
  PostCard,
  CategoriesWidget,
  PostsWidget,
  FeaturedPostsWidget,
  TagsWidget,
  AuthorWidget,
} from "../components";

import FeaturedPosts from "../sections/FeaturedPosts";
import { getAuthor, getPosts } from "../services";

const Home = ({ posts, author }) => {
  return (
    <div
      id='layout-child'
      className='container mx-auto px-10 lg:px-0 xl:px-10 mb-8'
    >
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href={author.image.url} />
      </Head>

      <FeaturedPosts />

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-7 xl:gap-12'>
        <div className='md:grid md:grid-cols-8 md:gap-7 md:auto-rows-min xl:gap-12 col-span-1 lg:col-span-9'>
          {posts.map((post) => (
            <div key={post.title} className='flex items-stretch col-span-4'>
              <PostCard post={post} />
            </div>
          ))}
        </div>

        <div className='col-span-1 lg:col-span-3'>
          <div className='relative lg:sticky top-8'>
            <FeaturedPostsWidget />
            <AuthorWidget author={author} />
            <PostsWidget />
            <CategoriesWidget />
            <TagsWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];
  const author = await getAuthor();

  return {
    props: { posts, author },
  };
};

export default Home;
