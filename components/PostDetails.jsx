import {
  ClipboardDocumentCheckIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/20/solid";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import moment from "moment";
import { Tooltip } from "react-tooltip";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

import hljs from "highlight.js";
hljs.configure({ ignoreUnescapedHTML: true });

import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import bash from "highlight.js/lib/languages/bash";
import cpp from "highlight.js/lib/languages/cpp";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import graphql from "highlight.js/lib/languages/graphql";
import handlebars from "highlight.js/lib/languages/handlebars";
import python from "highlight.js/lib/languages/python";
import Table from "./Table";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("graphql", graphql);
hljs.registerLanguage("handlebars", handlebars);
hljs.registerLanguage("python", python);

const PostDetails = ({ post }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    hljs.highlightAll();
  }, []);

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

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }

      if (obj.type === "link") {
        modifiedText = (
          <a
            key={index}
            href={obj.href}
            className='text-blue-500 hover:text-blue-900 dark:text-indigo-400 dark:hover:text-indigo-500'
            target={obj.openInNewTab ? "_blank" : "_self"}
          >
            {obj.children.map((item, i) => {
              if (item.underline) {
                return (
                  <React.Fragment key={i}>
                    <u>{item.text}</u>
                  </React.Fragment>
                );
              }

              if (item.italic) {
                return (
                  <React.Fragment key={i}>
                    <em>{item.text}</em>
                  </React.Fragment>
                );
              }

              if (item.bold) {
                return (
                  <React.Fragment key={i}>
                    <b>{item.text}</b>
                  </React.Fragment>
                );
              }
            })}
          </a>
        );
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3
            key={index}
            className='text-justify text-3xl font-semibold cursor-default mb-8'
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );

      case "heading-four":
        return (
          <h4
            key={index}
            className='text-justify text-2xl font-semibold cursor-default mb-8'
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );

      case "heading-five":
        return (
          <h5
            key={index}
            className='text-justify text-xl font-semibold cursor-default mb-8'
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h5>
        );

      case "heading-six":
        return (
          <h6
            key={index}
            className='text-justify text-lg font-semibold cursor-default mb-8'
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h6>
        );

      case "paragraph":
        return (
          <p key={index} className='text-justify text-base cursor-default mb-8'>
            {modifiedText.map((item, i) => {
              return <React.Fragment key={i}>{item}</React.Fragment>;
            })}
          </p>
        );

      case "code-block":
        return (
          <div key={index} className='relative group'>
            <Tooltip
              anchorId={index}
              content='Copy to Clipboard'
              place='bottom'
              className='dark:bg-teal-900 dark:text-night-teal'
            />
            {modifiedText.map((item, i) => {
              const [copied, setCopied] = useState(false);
              const snippetCopy = item;

              const copySuccess = () => {
                setCopied(true);

                setTimeout(() => {
                  setCopied(false);
                }, 3000);
              };

              return (
                <React.Fragment key={i}>
                  <div className='border-2 bg-code-block text-night-white text-base rounded-lg p-3 pt-2 mb-8'>
                    <pre>
                      <code className='block overflow-auto scrollbar-thin scrollbar-track-rounded-lg scrollbar-track-night-gray scrollbar-thumb-rounded-lg scrollbar-thumb-blue-900 dark:scrollbar-thumb-night-blue'>
                        {item}
                      </code>
                    </pre>
                  </div>

                  <CopyToClipboard text={snippetCopy} onCopy={successToast}>
                    <button
                      id={index}
                      className='absolute opacity-0 top-2 right-2 hover:bg-[#1d3b53fc] transition-opacity duration-300 group-hover:opacity-100 rounded-lg p-1'
                      onClick={copySuccess}
                    >
                      <DocumentDuplicateIcon
                        className={`${
                          copied && "hidden"
                        } h-5 w-5 text-night-teal`}
                        aria-hidden='false'
                      />
                      <ClipboardDocumentCheckIcon
                        className={`${
                          !copied && "hidden"
                        } h-5 w-5 text-night-teal`}
                        aria-hidden='false'
                      />
                    </button>
                  </CopyToClipboard>
                </React.Fragment>
              );
            })}
          </div>
        );

      case "block-quote":
        return (
          <div key={index} className='mb-8'>
            <blockquote className='text-justify p-2 cursor-default border-l-4 border-blue-500 dark:border-night-blue'>
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </blockquote>
          </div>
        );

      case "bulleted-list":
        return (
          <ul
            key={index}
            style={{
              listStyleType: "square",
            }}
            className='cursor-default ml-4 mb-8'
          >
            {obj.children.map((listItem, i) => {
              return (
                <React.Fragment key={i}>
                  {listItem.children.map((listItemChild, i) => {
                    return (
                      <React.Fragment key={i}>
                        {listItemChild.children.map((data, i) => {
                          let styledText = data.text;

                          if (data.bold) {
                            if (data.italic) {
                              styledText = (
                                <b key={i}>
                                  <em>{data.text}</em>
                                </b>
                              );
                            } else if (data.underline) {
                              styledText = (
                                <b key={i}>
                                  <u>{data.text}</u>
                                </b>
                              );
                            } else {
                              styledText = <b key={i}>{data.text}</b>;
                            }
                          }

                          if (data.italic) {
                            if (data.bold) {
                              styledText = (
                                <em key={i}>
                                  <b>{data.text}</b>
                                </em>
                              );
                            } else if (data.underline) {
                              styledText = (
                                <em key={i}>
                                  <u>{data.text}</u>
                                </em>
                              );
                            } else {
                              styledText = <em key={i}>{data.text}</em>;
                            }
                          }

                          if (data.underline) {
                            if (data.bold) {
                              styledText = (
                                <u key={i}>
                                  <b>{data.text}</b>
                                </u>
                              );
                            } else if (data.italic) {
                              styledText = (
                                <u key={i}>
                                  <em>{data.text}</em>
                                </u>
                              );
                            } else {
                              styledText = <u key={i}>{data.text}</u>;
                            }
                          }

                          return (
                            <React.Fragment key={i}>
                              <li>{styledText}</li>
                            </React.Fragment>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </ul>
        );

      case "numbered-list":
        return (
          <ol
            key={index}
            style={{
              listStyleType: "upper-roman",
            }}
            className='cursor-default ml-4 mb-8'
          >
            {obj.children.map((listItem, i) => {
              return (
                <React.Fragment key={i}>
                  {listItem.children.map((listItemChild, i) => {
                    return (
                      <React.Fragment key={i}>
                        {listItemChild.children.map((data, i) => {
                          let styledText = data.text;

                          if (data.bold) {
                            if (data.italic) {
                              styledText = (
                                <b key={i}>
                                  <em>{data.text}</em>
                                </b>
                              );
                            } else if (data.underline) {
                              styledText = (
                                <b key={i}>
                                  <u>{data.text}</u>
                                </b>
                              );
                            } else {
                              styledText = <b key={i}>{data.text}</b>;
                            }
                          }

                          if (data.italic) {
                            if (data.bold) {
                              styledText = (
                                <em key={i}>
                                  <b>{data.text}</b>
                                </em>
                              );
                            } else if (data.underline) {
                              styledText = (
                                <em key={i}>
                                  <u>{data.text}</u>
                                </em>
                              );
                            } else {
                              styledText = <em key={i}>{data.text}</em>;
                            }
                          }

                          if (data.underline) {
                            if (data.bold) {
                              styledText = (
                                <u key={i}>
                                  <b>{data.text}</b>
                                </u>
                              );
                            } else if (data.italic) {
                              styledText = (
                                <u key={i}>
                                  <em>{data.text}</em>
                                </u>
                              );
                            } else {
                              styledText = <u key={i}>{data.text}</u>;
                            }
                          }

                          return (
                            <React.Fragment key={i}>
                              <li>{styledText}</li>
                            </React.Fragment>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </ol>
        );

      case "table":
        return mounted && <Table key={index} obj={obj} index={index} />;

      case "image":
        return (
          <img
            key={index}
            className='mb-8'
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );

      // case "iframe":
      //   return (
      // <iframe
      //   key={index}
      //   className='w-full h-full aspect-video mb-8'
      //   src={obj.url}
      //   title='YouTube Video Player'
      //   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      //   allowFullScreen
      // ></iframe>
      //   );

      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className='bg-white dark:bg-night-gray shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md mb-6'>
          <img
            src={post.thumbnail.url}
            alt={post.title}
            className='object-top h-full w-full rounded-t-lg'
          />
        </div>
        <div className='px-4 lg:px-0'>
          <div className='flex flex-wrap items-center justify-center mb-8 w-full'>
            <div className='flex flex-wrap items-center mb-4 md:mb-0 md:w-auto mr-5 md:mr-9'>
              <div>
                <img
                  alt={post.author.name}
                  height='30px'
                  width='30px'
                  className='align-middle rounded-full'
                  src={post.author.image.url}
                />
              </div>
              <div>
                <p className='inline align-middle cursor-default text-gray-700 dark:text-night-teal ml-2 text-lg'>
                  {post.author.name}
                </p>
              </div>
            </div>
            <div className='flex flex-wrap items-center font-md text-gray-700 dark:text-night-teal mb-4 md:mb-0'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 inline mr-2 text-blue-500 dark:text-indigo-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <div>
                <span className='align-middle cursor-default'>
                  {moment(post.createdAt).format("MMM DD, YYYY")}
                </span>
              </div>
            </div>
          </div>
          <h1 className='mb-8 text-3xl text-center font-semibold cursor-default dark:text-night-white'>
            {post.title}
          </h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
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

export default PostDetails;
