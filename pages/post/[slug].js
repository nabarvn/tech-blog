import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Author,
  CategoriesWidget,
  CommentForm,
  Comments,
  Loader,
  PostDetails,
  PostsWidget,
  TagsWidget,
} from "../../components";

import { getPostDetails, getPosts } from "../../services";

const Post = ({ post }) => {
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
        <link rel='icon' href='/nabarun.png' />
      </Head>
      <div className='mb-2 ml-2'>
        <Link
          href='/'
          className='hover:text-blue-500'
          onClick={() => router.back()}
        >
          {`< Back`}
        </Link>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetails post={post} />
          <Author author={post.author} />
          <CommentForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <PostsWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <CategoriesWidget />
            <TagsWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  };
};

export default Post;
