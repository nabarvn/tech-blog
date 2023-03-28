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
        <link rel='icon' href='/nabarun.png' />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-7 xl:gap-12'>
        <div className='lg:grid lg:grid-cols-8 lg:gap-7 lg:auto-rows-min xl:gap-12 col-span-1 md:col-span-6 lg:col-span-9'>
          {posts.map((post) => (
            <div
              key={post.node.title}
              className='flex items-stretch col-span-4'
            >
              <PostCard post={post.node} />
            </div>
          ))}
        </div>
        <div className='col-span-1 md:col-span-6 lg:col-span-3'>
          <div className='relative md:sticky top-8'>
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
