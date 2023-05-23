import {
  ClipboardDocumentCheckIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/20/solid";

import { useState } from "react";
import { useTheme } from "next-themes";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

const CodeBlock = ({ i, item }) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const copySuccess = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const successToast = () => {
    toast.success("Copied Successfully!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme,
    });
  };

  return (
    <>
      <div className='border-2 bg-code-block text-night-white text-base rounded-lg p-3 pt-2 mb-8'>
        <pre>
          <code className='block overflow-auto scrollbar-thin scrollbar-track-rounded-lg scrollbar-track-night-gray scrollbar-thumb-rounded-lg scrollbar-thumb-blue-900 dark:scrollbar-thumb-night-blue'>
            {item}
          </code>
        </pre>
      </div>

      <CopyToClipboard text={item} onCopy={successToast}>
        <button
          id={i}
          className='absolute opacity-0 top-2 right-2 hover:bg-[#1d3b53fc] transition-opacity duration-300 group-hover:opacity-100 rounded-lg p-1'
          onClick={copySuccess}
        >
          <DocumentDuplicateIcon
            key={i}
            className={`${copied && "hidden"} h-5 w-5 text-night-teal`}
            aria-hidden='false'
          />
          <ClipboardDocumentCheckIcon
            key={i}
            className={`${!copied && "hidden"} h-5 w-5 text-night-teal`}
            aria-hidden='false'
          />
        </button>
      </CopyToClipboard>

      <ToastContainer
        position='bottom-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme
      />
    </>
  );
};

export default CodeBlock;
