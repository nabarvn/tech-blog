import { useRouter } from "next/router";
import Head from "next/head";
import { getTags, getTagPosts, getAuthor } from "../../services";

import {
  PostCard,
  CategoriesWidget,
  TagsWidget,
  Loader,
  AuthorWidget,
} from "../../components";

const TagPosts = ({ posts, author }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div
      id='layout-child'
      className='container mx-auto px-10 lg:px-0 xl:px-10 mb-8'
    >
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href={author.image.url} />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-7 xl:gap-12'>
        <div className='md:grid md:grid-cols-8 md:gap-7 col-span-1 lg:col-span-9 md:auto-rows-min xl:gap-12'>
          {posts.map((post, index) => (
            <div key={index} className='flex items-stretch col-span-4'>
              <PostCard post={post} />
            </div>
          ))}
        </div>

        <div className='col-span-1 lg:col-span-3'>
          <div className='relative lg:sticky top-8'>
            <AuthorWidget author={author} />
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
export const getStaticProps = async ({ params }) => {
  const posts = await getTagPosts(params.slug);
  const author = await getAuthor();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, author },
  };
};

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export const getStaticPaths = async () => {
  const tags = await getTags();

  return {
    paths: tags.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
};
