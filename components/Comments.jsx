import moment from "moment";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className='bg-white dark:bg-night-gray shadow-md rounded-lg p-8 pb-12 mt-8'>
          <h3 className='text-xl mb-4 font-semibold cursor-default dark:text-night-white border-b pb-4'>
            {comments.length > 1
              ? `${comments.length} Comments`
              : `${comments.length} Comment`}
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className='border-b border-gray-100 mb-4 pb-4'
            >
              <p className='cursor-default mb-4'>
                <span className='font-semibold dark:text-night-white'>
                  {comment.name}
                </span>
                {` on ${moment(comment.createdAt).format("MMM DD, YYYY")}`}
              </p>
              <p className='whitespace-pre-line cursor-default text-gray-700 dark:text-gray-300 w-full'>
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
