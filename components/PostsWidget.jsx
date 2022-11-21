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
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {slug ? "Similar Posts" : "Recent Posts"}
          </h3>
          {widgetPosts.map((post) => (
            <div key={post.title} className='flex items-center w-full mb-4'>
              <div className='w-16 flex-none'>
                <img
                  alt={post.title}
                  className='align-middle rounded-full h-10'
                  src={post.thumbnail.url}
                />
              </div>
              <div className='flex-grow ml-4'>
                <p className='text-gray-700 font-xs'>
                  {moment(post.createdAt).format("MMM DD, YYYY")}
                </p>
                <Link
                  href={`/post/${post.slug}`}
                  className='text-md transition duration-300 cursor-pointer hover:text-blue-500'
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
