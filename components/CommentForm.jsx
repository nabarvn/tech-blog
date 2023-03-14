import { useEffect, useRef, useState } from "react";
import { submitComment } from "../services";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "next-themes";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
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
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    setError(false);

    const { value: comment } = commentRef.current;
    const { value: name } = nameRef.current;
    const { value: email } = emailRef.current;
    const { checked: storeData } = storeDataRef.current;

    if (!comment || !name || !email) {
      setError(true);

      if (!comment) {
        setCommentError(true);

        setTimeout(() => {
          setCommentError(false);
        }, 3000);
      }

      if (!name) {
        setNameError(true);

        setTimeout(() => {
          setNameError(false);
        }, 3000);
      }

      if (!email) {
        setEmailError(true);

        setTimeout(() => {
          setEmailError(false);
        }, 3000);
      }

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

    if (regEx.test(email)) {
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

        nameRef.current.value = "";
        emailRef.current.value = "";
        commentRef.current.value = "";

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      });
    } else if (!regEx.test(email)) {
      setEmailError(true);

      setTimeout(() => {
        setEmailError(false);
      }, 3000);
    }
  };

  return (
    <div className='relative bg-white dark:bg-night-gray shadow-lg rounded-lg p-8 pb-9 md:pb-7'>
      <h3 className='text-xl mb-8 font-semibold cursor-default dark:text-night-white border-b pb-4'>
        Say gm?
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <label className='relative cursor-pointer'>
          <textarea
            ref={commentRef}
            className={`px-3.5 py-2 outline-none w-full rounded-lg ring-1 ring-gray-200 focus:ring-2 ${
              commentError &&
              "ring-2 ring-red-500 text-red-500 dark:text-red-500"
            } focus:ring-blue-500 dark:focus:ring-indigo-500 bg-white dark:bg-night-gray text-gray-700 dark:text-night-white`}
            placeholder=' '
            name='comment'
            autoComplete='off'
            required
          />
          <span
            className={`text-lg text-gray-700 dark:text-gray-300 ${
              commentError && "text-red-500 dark:text-red-500"
            } text-opacity-50 italic absolute left-4 top-1 transition duration-300 place-holder`}
          >
            Leave a comment*
          </span>
        </label>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <label className='relative cursor-pointer'>
          <input
            type='text'
            ref={nameRef}
            className={`px-3.5 py-2 outline-none w-full rounded-lg ring-1 ring-gray-200 focus:ring-2 ${
              nameError && "ring-2 ring-red-500 text-red-500 dark:text-red-500"
            } focus:ring-blue-500 dark:focus:ring-indigo-500 bg-white dark:bg-night-gray text-gray-700 dark:text-night-white`}
            placeholder=' '
            name='name'
            autoComplete='off'
            required
          />
          <span
            className={`text-lg text-gray-700 dark:text-gray-300 ${
              nameError && "text-red-500 dark:text-red-500"
            } text-opacity-50 italic absolute left-4 top-1 transition duration-300 place-holder`}
          >
            Name*
          </span>
        </label>
        <label className='relative cursor-pointer'>
          <input
            type='text'
            ref={emailRef}
            className={`px-3.5 py-2 outline-none w-full rounded-lg ring-1 ring-gray-200 focus:ring-2 ${
              emailError && "ring-2 ring-red-500 text-red-500 dark:text-red-500"
            } focus:ring-blue-500 dark:focus:ring-indigo-500 bg-white dark:bg-night-gray text-gray-700 dark:text-night-white`}
            placeholder=' '
            name='email'
            autoComplete='off'
            required
          />
          <span
            className={`text-lg text-gray-700 dark:text-gray-300 ${
              emailError && "text-red-500 dark:text-red-500"
            } text-opacity-50 italic absolute left-4 top-1 transition duration-300 place-holder`}
          >
            Email*
          </span>
        </label>
      </div>
      <div className='flex mb-4'>
        <input
          ref={storeDataRef}
          type='checkbox'
          defaultChecked={true}
          id='storeData'
          name='storeData'
          className='cursor-pointer h-3 w-3 md:self-center dark:accent-indigo-500 mt-1.5 md:mt-0.5'
        />
        <label
          className='text-base lg:text-lg self-center text-gray-700 dark:text-gray-300 cursor-pointer ml-2'
          htmlFor='storeData'
        >
          Save my e-mail and name for the next time I comment.
        </label>
      </div>
      <div className='mt-8 pb-2'>
        <button
          type='button'
          onClick={handleSubmit}
          className='bg-blue-500 dark:bg-night-blue active:bg-blue-900 dark:active:bg-indigo-700 inline-block text-lg font-medium rounded-full text-white px-3 py-1 cursor-pointer'
        >
          Submit
        </button>
        {showSuccessMessage && !emailError && (
          <span className='text-sm float-left md:float-right font-semibold text-green-500 dark:text-night-teal mt-3'>
            Comment submitted for review.
          </span>
        )}
        {error && (
          <span className='absolute bottom-3 md:bottom-2 left-8 text-sm font-semibold text-red-500'>
            *All fields are required.
          </span>
        )}
        {emailError && !error && (
          <span className='absolute bottom-3 md:bottom-2 left-8 text-sm font-semibold text-red-500'>
            Please input a valid email address.
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
