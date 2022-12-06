import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostsWidget = ({ slug, categories }) => {
  const [widgetPosts, setWidgetPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories).then((result) =>
        setWidgetPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setWidgetPosts(result));
    }
  }, [slug]);

  return (
    <>
      {widgetPosts.length > 0 && (
        <div className='bg-white dark:bg-night-gray shadow-lg rounded-lg p-8 lg:p-6 mb-8'>
          <h3 className='text-xl lg:text-lg mb-8 lg:mb-6 font-semibold dark:text-night-white border-b pb-4'>
            {slug ? "Similar Articles" : "Latest Articles"}
          </h3>
          {widgetPosts.map((post) => (
            <div key={post.title} className='flex items-center w-full mb-4'>
              <div className='w-16 flex-none'>
                <img
                  alt={post.title}
                  className='align-middle rounded-full h-10 w-3/4 lg:h-7'
                  src={post.thumbnail.url}
                />
              </div>
              <div className='flex-grow ml-4'>
                <p className='text-gray-700 dark:text-night-teal font-xs lg:text-xs'>
                  {moment(post.createdAt).format("MMM DD, YYYY")}
                </p>
                <Link
                  href={`/post/${post.slug}`}
                  className='text-md lg:text-sm transition duration-300 cursor-pointer dark:text-gray-300 hover:text-blue-500 dark:hover:text-night-blue'
                >
                  {post.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostsWidget;
