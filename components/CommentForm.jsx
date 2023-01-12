import { useEffect, useRef, useState } from "react";
import { submitComment } from "../services";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "next-themes";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { theme } = useTheme();

  const commentRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const storeDataRef = useRef();

  useEffect(() => {
    nameRef.current.value = window.localStorage.getItem("name");
    emailRef.current.value = window.localStorage.getItem("email");
  }, []);

  const handleSubmit = () => {
    setError(false);

    const { value: comment } = commentRef.current;
    const { value: name } = nameRef.current;
    const { value: email } = emailRef.current;
    const { checked: storeData } = storeDataRef.current;

    if (!comment || !name || !email) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    !error &&
      toast.success("Process Initiated...", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme,
      });

    submitComment(commentObj).then(() => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className='bg-white dark:bg-night-gray shadow-lg rounded-lg p-8 pb-9 md:pb-7 mb-8'>
      <h3 className='text-xl mb-8 font-semibold cursor-default dark:text-night-white border-b pb-4'>
        Say gm?
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <label className='relative cursor-pointer'>
          <textarea
            ref={commentRef}
            className='p-2 px-3.5 outline-none w-full rounded-lg ring-1 ring-gray-200 focus:1 focus:ring-blue-500 dark:focus:ring-night-blue bg-white dark:bg-night-gray text-gray-700 dark:text-night-white'
            placeholder=' '
            name='comment'
            required
          />
          <span className='px-1 text-md text-gray-700 dark:text-gray-300 text-opacity-50 italic absolute left-4 top-2 transition duration-300 place-holder'>
            Leave a comment
          </span>
        </label>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <label className='relative cursor-pointer'>
          <input
            type='text'
            ref={nameRef}
            className='px-3.5 py-2 outline-none w-full rounded-lg ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-night-blue bg-white dark:bg-night-gray text-gray-700 dark:text-night-white'
            placeholder=' '
            name='name'
            required
          />
          <span className='px-1 text-md text-gray-700 dark:text-gray-300 text-opacity-50 italic absolute left-4 top-2 transition duration-300 place-holder'>
            Name
          </span>
        </label>
        <label className='relative cursor-pointer'>
          <input
            type='text'
            ref={emailRef}
            className='px-3.5 py-2 outline-none w-full rounded-lg ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-night-blue bg-white dark:bg-night-gray text-gray-700 dark:text-night-white'
            placeholder=' '
            name='email'
            required
          />
          <span className='px-1 text-md text-gray-700 dark:text-gray-300 text-opacity-50 italic absolute left-4 top-2 transition duration-300 place-holder'>
            Email
          </span>
        </label>
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input
            ref={storeDataRef}
            type='checkbox'
            defaultChecked={true}
            id='storeData'
            name='storeData'
          />
          <label
            className='text-gray-700 dark:text-gray-300 cursor-pointer ml-2'
            htmlFor='storeData'
          >
            Save my e-mail and name for the next time I comment.
          </label>
        </div>
      </div>
      <div className='mt-8 pb-2'>
        <button
          type='button'
          onClick={handleSubmit}
          className='transition duration-300 transform bg-blue-500 dark:bg-night-blue hover:bg-blue-900 dark:hover:bg-blue-900 inline-block text-lg font-medium rounded-full text-white px-3 py-1 cursor-pointer'
        >
          Submit
        </button>
        {showSuccessMessage && (
          <span className='text-sm float-left md:float-right font-semibold text-green-500 dark:text-night-teal mt-3'>
            Comment submitted for review.
          </span>
        )}
        {error && (
          <span className='text-sm float-left md:float-right font-semibold text-red-500 mt-9 md:mt-3'>
            All fields are required.
          </span>
        )}
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme
      />
    </div>
  );
};

export default CommentForm;
