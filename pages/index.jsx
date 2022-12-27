import Head from "next/head";

import {
  PostCard,
  CategoriesWidget,
  PostsWidget,
  FeaturedPostsWidget,
  TagsWidget,
} from "../components";

import FeaturedPosts from "../sections/FeaturedPosts";
import { getPosts } from "../services";

const Home = ({ posts }) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href='/nabarun.png' />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
        <div className='lg:grid lg:grid-cols-8 lg:gap-7 col-span-1 md:col-span-6 lg:col-span-9'>
          {posts.map((post) => (
            <div key={post.node.title} className='col-span-4'>
              <PostCard post={post.node} />
            </div>
          ))}
        </div>
        <div className='col-span-1 md:col-span-6 lg:col-span-3'>
          <div className='relative md:sticky top-8'>
            <FeaturedPostsWidget />
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

  return {
    props: { posts },
  };
};

export default Home;
