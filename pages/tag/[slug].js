import { useRouter } from "next/router";
import Head from "next/head";
import { getTags, getTagPosts } from "../../services";

import {
  PostCard,
  CategoriesWidget,
  TagsWidget,
  Loader,
} from "../../components";

const TagPosts = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div id='layout-child' className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href='/nabarun.png' />
      </Head>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
        <div className='lg:grid lg:grid-cols-8 lg:gap-7 col-span-1 md:col-span-6 lg:col-span-9'>
          {posts.map((post, index) => (
            <div key={index} className='col-span-4'>
              <PostCard post={post.node} />
            </div>
          ))}
        </div>
        <div className='col-span-1 md:col-span-6 lg:col-span-3'>
          <div className='relative md:sticky top-8'>
            <CategoriesWidget />
            <TagsWidget />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TagPosts;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getTagPosts(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getTags();

  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
