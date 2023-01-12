import React from "react";

const Table = ({ obj, index }) => {
  return (
    <table key={index} className='w-full mb-8'>
      {obj.children.map((tableBody, i) => {
        return (
          <React.Fragment key={i}>
            <tbody className='border-2 border-night-teal'>
              {tableBody.children.map((tableRow, i) => {
                return (
                  <React.Fragment key={i}>
                    <tr className='border-2 border-night-teal'>
                      {tableRow.children.map((tableCell, i) => {
                        return (
                          <React.Fragment key={i}>
                            <td className='border-2 border-night-teal p-2'>
                              {tableCell.children.map((tableData, i) => {
                                switch (tableData.type) {
                                  case "heading-three":
                                    return (
                                      <h3
                                        key={i}
                                        className='text-justify text-3xl font-semibold cursor-default'
                                      >
                                        {tableData.children.map((item, i) => {
                                          if (item.type === "link") {
                                            return (
                                              <React.Fragment key={i}>
                                                <a
                                                  href={item.href}
                                                  className='text-blue-500 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-700'
                                                  target={
                                                    obj.openInNewTab
                                                      ? "_blank"
                                                      : "_self"
                                                  }
                                                >
                                                  {item.children.map(
                                                    (item, i) => {
                                                      let styledText =
                                                        item.text;

                                                      if (item.underline) {
                                                        if (item.bold) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.italic
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                {styledText}
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }

                                                      if (item.italic) {
                                                        if (item.bold) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.underline
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                {styledText}
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }

                                                      if (item.bold) {
                                                        if (item.italic) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.underline
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                {styledText}
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }
                                                    }
                                                  )}
                                                </a>
                                              </React.Fragment>
                                            );
                                          }

                                          let styledText = item.text;

                                          if (item.underline) {
                                            if (item.italic) {
                                              return (
                                                <u key={i}>
                                                  <em>{styledText}</em>
                                                </u>
                                              );
                                            }

                                            if (item.bold) {
                                              return (
                                                <u key={i}>
                                                  <b>{styledText}</b>
                                                </u>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <u>{styledText}</u>
                                              </React.Fragment>
                                            );
                                          }

                                          if (item.bold) {
                                            if (item.italic) {
                                              return (
                                                <b key={i}>
                                                  <em>{styledText}</em>
                                                </b>
                                              );
                                            }

                                            if (item.underline) {
                                              return (
                                                <b key={i}>
                                                  <u>{styledText}</u>
                                                </b>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <b>{styledText}</b>
                                              </React.Fragment>
                                            );
                                          }

                                          if (item.italic) {
                                            if (item.bold) {
                                              return (
                                                <em key={i}>
                                                  <b>{styledText}</b>
                                                </em>
                                              );
                                            }

                                            if (item.underline) {
                                              return (
                                                <em key={i}>
                                                  <u>{styledText}</u>
                                                </em>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <em>{styledText}</em>
                                              </React.Fragment>
                                            );
                                          }
                                        })}
                                      </h3>
                                    );

                                  case "heading-four":
                                    return (
                                      <h4
                                        key={i}
                                        className='text-justify text-2xl font-semibold cursor-default'
                                      >
                                        {tableData.children.map((item, i) => {
                                          if (item.type === "link") {
                                            return (
                                              <React.Fragment key={i}>
                                                <a
                                                  href={item.href}
                                                  className='text-blue-500 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-700'
                                                  target={
                                                    obj.openInNewTab
                                                      ? "_blank"
                                                      : "_self"
                                                  }
                                                >
                                                  {item.children.map(
                                                    (item, i) => {
                                                      let styledText =
                                                        item.text;

                                                      if (item.underline) {
                                                        if (item.bold) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.italic
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                {styledText}
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }

                                                      if (item.italic) {
                                                        if (item.bold) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.underline
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                {styledText}
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }

                                                      if (item.bold) {
                                                        if (item.italic) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.underline
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                {styledText}
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }
                                                    }
                                                  )}
                                                </a>
                                              </React.Fragment>
                                            );
                                          }

                                          let styledText = item.text;

                                          if (item.underline) {
                                            if (item.italic) {
                                              return (
                                                <u key={i}>
                                                  <em>{styledText}</em>
                                                </u>
                                              );
                                            }

                                            if (item.bold) {
                                              return (
                                                <u key={i}>
                                                  <b>{styledText}</b>
                                                </u>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <u>{styledText}</u>
                                              </React.Fragment>
                                            );
                                          }

                                          if (item.bold) {
                                            if (item.italic) {
                                              return (
                                                <b key={i}>
                                                  <em>{styledText}</em>
                                                </b>
                                              );
                                            }

                                            if (item.underline) {
                                              return (
                                                <b key={i}>
                                                  <u>{styledText}</u>
                                                </b>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <b>{styledText}</b>
                                              </React.Fragment>
                                            );
                                          }

                                          if (item.italic) {
                                            if (item.bold) {
                                              return (
                                                <em key={i}>
                                                  <b>{styledText}</b>
                                                </em>
                                              );
                                            }

                                            if (item.underline) {
                                              return (
                                                <em key={i}>
                                                  <u>{styledText}</u>
                                                </em>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <em>{styledText}</em>
                                              </React.Fragment>
                                            );
                                          }
                                        })}
                                      </h4>
                                    );

                                  case "heading-five":
                                    return (
                                      <h5
                                        key={i}
                                        className='text-justify text-xl font-semibold cursor-default'
                                      >
                                        {tableData.children.map((item, i) => {
                                          if (item.type === "link") {
                                            return (
                                              <React.Fragment key={i}>
                                                <a
                                                  href={item.href}
                                                  className='text-blue-500 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-700'
                                                  target={
                                                    obj.openInNewTab
                                                      ? "_blank"
                                                      : "_self"
                                                  }
                                                >
                                                  {item.children.map(
                                                    (item, i) => {
                                                      let styledText =
                                                        item.text;

                                                      if (item.underline) {
                                                        if (item.bold) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.italic
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                {styledText}
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }

                                                      if (item.italic) {
                                                        if (item.bold) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.underline
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                {styledText}
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }

                                                      if (item.bold) {
                                                        if (item.italic) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.underline
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                {styledText}
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }
                                                    }
                                                  )}
                                                </a>
                                              </React.Fragment>
                                            );
                                          }

                                          let styledText = item.text;

                                          if (item.underline) {
                                            if (item.italic) {
                                              return (
                                                <u key={i}>
                                                  <em>{styledText}</em>
                                                </u>
                                              );
                                            }

                                            if (item.bold) {
                                              return (
                                                <u key={i}>
                                                  <b>{styledText}</b>
                                                </u>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <u>{styledText}</u>
                                              </React.Fragment>
                                            );
                                          }

                                          if (item.bold) {
                                            if (item.italic) {
                                              return (
                                                <b key={i}>
                                                  <em>{styledText}</em>
                                                </b>
                                              );
                                            }

                                            if (item.underline) {
                                              return (
                                                <b key={i}>
                                                  <u>{styledText}</u>
                                                </b>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <b>{styledText}</b>
                                              </React.Fragment>
                                            );
                                          }

                                          if (item.italic) {
                                            if (item.bold) {
                                              return (
                                                <em key={i}>
                                                  <b>{styledText}</b>
                                                </em>
                                              );
                                            }

                                            if (item.underline) {
                                              return (
                                                <em key={i}>
                                                  <u>{styledText}</u>
                                                </em>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <em>{styledText}</em>
                                              </React.Fragment>
                                            );
                                          }
                                        })}
                                      </h5>
                                    );

                                  case "heading-six":
                                    return (
                                      <h6
                                        key={i}
                                        className='text-justify text-lg font-semibold cursor-default'
                                      >
                                        {tableData.children.map((item, i) => {
                                          if (item.type === "link") {
                                            return (
                                              <React.Fragment key={i}>
                                                <a
                                                  href={item.href}
                                                  className='text-blue-500 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-700'
                                                  target={
                                                    obj.openInNewTab
                                                      ? "_blank"
                                                      : "_self"
                                                  }
                                                >
                                                  {item.children.map(
                                                    (item, i) => {
                                                      let styledText =
                                                        item.text;

                                                      if (item.underline) {
                                                        if (item.bold) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.italic
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                {styledText}
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }

                                                      if (item.italic) {
                                                        if (item.bold) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.underline
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                {styledText}
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }

                                                      if (item.bold) {
                                                        if (item.italic) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        } else if (
                                                          item.underline
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        } else {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                {styledText}
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }
                                                    }
                                                  )}
                                                </a>
                                              </React.Fragment>
                                            );
                                          }

                                          let styledText = item.text;

                                          if (item.underline) {
                                            if (item.italic) {
                                              return (
                                                <u key={i}>
                                                  <em>{styledText}</em>
                                                </u>
                                              );
                                            }

                                            if (item.bold) {
                                              return (
                                                <u key={i}>
                                                  <b>{styledText}</b>
                                                </u>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <u>{styledText}</u>
                                              </React.Fragment>
                                            );
                                          }

                                          if (item.bold) {
                                            if (item.italic) {
                                              return (
                                                <b key={i}>
                                                  <em>{styledText}</em>
                                                </b>
                                              );
                                            }

                                            if (item.underline) {
                                              return (
                                                <b key={i}>
                                                  <u>{styledText}</u>
                                                </b>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <b>{styledText}</b>
                                              </React.Fragment>
                                            );
                                          }

                                          if (item.italic) {
                                            if (item.bold) {
                                              return (
                                                <em key={i}>
                                                  <b>{styledText}</b>
                                                </em>
                                              );
                                            }

                                            if (item.underline) {
                                              return (
                                                <em key={i}>
                                                  <u>{styledText}</u>
                                                </em>
                                              );
                                            }

                                            return (
                                              <React.Fragment key={i}>
                                                <em>{styledText}</em>
                                              </React.Fragment>
                                            );
                                          }
                                        })}
                                      </h6>
                                    );

                                  case "paragraph":
                                    return (
                                      <p
                                        key={i}
                                        className='text-justify cursor-default'
                                      >
                                        {tableData.children.map((item, i) => {
                                          let styledText = item.text;

                                          if (item.bold) {
                                            if (item.italic) {
                                              styledText = (
                                                <b key={i}>
                                                  <em>{item.text}</em>
                                                </b>
                                              );
                                            } else if (item.underline) {
                                              styledText = (
                                                <b key={i}>
                                                  <u>{item.text}</u>
                                                </b>
                                              );
                                            } else {
                                              styledText = (
                                                <b key={i}>{item.text}</b>
                                              );
                                            }
                                          }

                                          if (item.italic) {
                                            if (item.bold) {
                                              styledText = (
                                                <em key={i}>
                                                  <b>{item.text}</b>
                                                </em>
                                              );
                                            } else if (item.underline) {
                                              styledText = (
                                                <em key={i}>
                                                  <u>{item.text}</u>
                                                </em>
                                              );
                                            } else {
                                              styledText = (
                                                <em key={i}>{item.text}</em>
                                              );
                                            }
                                          }

                                          if (item.underline) {
                                            if (item.bold) {
                                              styledText = (
                                                <u key={i}>
                                                  <b>{item.text}</b>
                                                </u>
                                              );
                                            } else if (item.italic) {
                                              styledText = (
                                                <u key={i}>
                                                  <em>{item.text}</em>
                                                </u>
                                              );
                                            } else {
                                              styledText = (
                                                <u key={i}>{item.text}</u>
                                              );
                                            }
                                          }

                                          return (
                                            <React.Fragment key={i}>
                                              {styledText}
                                            </React.Fragment>
                                          );
                                        })}
                                      </p>
                                    );

                                  case "bulleted-list":
                                    return (
                                      <ul
                                        key={i}
                                        style={{
                                          listStyleType: "square",
                                        }}
                                        className='cursor-default ml-4'
                                      >
                                        {tableData.children.map(
                                          (listItem, i) => {
                                            return (
                                              <React.Fragment key={i}>
                                                {listItem.children.map(
                                                  (listItemChild, i) => {
                                                    return (
                                                      <React.Fragment key={i}>
                                                        {listItemChild.children.map(
                                                          (data, i) => {
                                                            let styledText =
                                                              data.text;

                                                            if (data.bold) {
                                                              if (data.italic) {
                                                                styledText = (
                                                                  <b key={i}>
                                                                    <em>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </em>
                                                                  </b>
                                                                );
                                                              } else if (
                                                                data.underline
                                                              ) {
                                                                styledText = (
                                                                  <b key={i}>
                                                                    <u>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </u>
                                                                  </b>
                                                                );
                                                              } else {
                                                                styledText = (
                                                                  <b key={i}>
                                                                    {data.text}
                                                                  </b>
                                                                );
                                                              }
                                                            }

                                                            if (data.italic) {
                                                              if (data.bold) {
                                                                styledText = (
                                                                  <em key={i}>
                                                                    <b>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </b>
                                                                  </em>
                                                                );
                                                              } else if (
                                                                data.underline
                                                              ) {
                                                                styledText = (
                                                                  <em key={i}>
                                                                    <u>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </u>
                                                                  </em>
                                                                );
                                                              } else {
                                                                styledText = (
                                                                  <em key={i}>
                                                                    {data.text}
                                                                  </em>
                                                                );
                                                              }
                                                            }

                                                            if (
                                                              data.underline
                                                            ) {
                                                              if (data.bold) {
                                                                styledText = (
                                                                  <u key={i}>
                                                                    <b>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </b>
                                                                  </u>
                                                                );
                                                              } else if (
                                                                data.italic
                                                              ) {
                                                                styledText = (
                                                                  <u key={i}>
                                                                    <em>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </em>
                                                                  </u>
                                                                );
                                                              } else {
                                                                styledText = (
                                                                  <u key={i}>
                                                                    {data.text}
                                                                  </u>
                                                                );
                                                              }
                                                            }

                                                            return (
                                                              <React.Fragment
                                                                key={i}
                                                              >
                                                                <li>
                                                                  {styledText}
                                                                </li>
                                                              </React.Fragment>
                                                            );
                                                          }
                                                        )}
                                                      </React.Fragment>
                                                    );
                                                  }
                                                )}
                                              </React.Fragment>
                                            );
                                          }
                                        )}
                                      </ul>
                                    );

                                  case "numbered-list":
                                    return (
                                      <ol
                                        key={i}
                                        style={{
                                          listStyleType: "upper-roman",
                                        }}
                                        className='cursor-default ml-4'
                                      >
                                        {tableData.children.map(
                                          (listItem, i) => {
                                            return (
                                              <React.Fragment key={i}>
                                                {listItem.children.map(
                                                  (listItemChild, i) => {
                                                    return (
                                                      <React.Fragment key={i}>
                                                        {listItemChild.children.map(
                                                          (data, i) => {
                                                            let styledText =
                                                              data.text;

                                                            if (data.bold) {
                                                              if (data.italic) {
                                                                styledText = (
                                                                  <b key={i}>
                                                                    <em>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </em>
                                                                  </b>
                                                                );
                                                              } else if (
                                                                data.underline
                                                              ) {
                                                                styledText = (
                                                                  <b key={i}>
                                                                    <u>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </u>
                                                                  </b>
                                                                );
                                                              } else {
                                                                styledText = (
                                                                  <b key={i}>
                                                                    {data.text}
                                                                  </b>
                                                                );
                                                              }
                                                            }

                                                            if (data.italic) {
                                                              if (data.bold) {
                                                                styledText = (
                                                                  <em key={i}>
                                                                    <b>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </b>
                                                                  </em>
                                                                );
                                                              } else if (
                                                                data.underline
                                                              ) {
                                                                styledText = (
                                                                  <em key={i}>
                                                                    <u>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </u>
                                                                  </em>
                                                                );
                                                              } else {
                                                                styledText = (
                                                                  <em key={i}>
                                                                    {data.text}
                                                                  </em>
                                                                );
                                                              }
                                                            }

                                                            if (
                                                              data.underline
                                                            ) {
                                                              if (data.bold) {
                                                                styledText = (
                                                                  <u key={i}>
                                                                    <b>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </b>
                                                                  </u>
                                                                );
                                                              } else if (
                                                                data.italic
                                                              ) {
                                                                styledText = (
                                                                  <u key={i}>
                                                                    <em>
                                                                      {
                                                                        data.text
                                                                      }
                                                                    </em>
                                                                  </u>
                                                                );
                                                              } else {
                                                                styledText = (
                                                                  <u key={i}>
                                                                    {data.text}
                                                                  </u>
                                                                );
                                                              }
                                                            }

                                                            return (
                                                              <React.Fragment
                                                                key={i}
                                                              >
                                                                <li>
                                                                  {styledText}
                                                                </li>
                                                              </React.Fragment>
                                                            );
                                                          }
                                                        )}
                                                      </React.Fragment>
                                                    );
                                                  }
                                                )}
                                              </React.Fragment>
                                            );
                                          }
                                        )}
                                      </ol>
                                    );

                                  case "class":
                                    return (
                                      <React.Fragment key={i}>
                                        {tableData.className === "thead" &&
                                          tableData.children.map((data) => {
                                            switch (data.type) {
                                              case "heading-five":
                                                return (
                                                  <h5
                                                    key={i}
                                                    className='text-center text-xl font-semibold cursor-default'
                                                  >
                                                    {data.children.map(
                                                      (item, i) => {
                                                        if (
                                                          item.type === "link"
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <a
                                                                href={item.href}
                                                                className='text-blue-500 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-700'
                                                                target={
                                                                  obj.openInNewTab
                                                                    ? "_blank"
                                                                    : "_self"
                                                                }
                                                              >
                                                                {item.children.map(
                                                                  (item, i) => {
                                                                    let styledText =
                                                                      item.text;

                                                                    if (
                                                                      item.underline
                                                                    ) {
                                                                      if (
                                                                        item.bold
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <u>
                                                                              <b>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </b>
                                                                            </u>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else if (
                                                                        item.italic
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <u>
                                                                              <em>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </em>
                                                                            </u>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <u>
                                                                              {
                                                                                styledText
                                                                              }
                                                                            </u>
                                                                          </React.Fragment>
                                                                        );
                                                                      }
                                                                    }

                                                                    if (
                                                                      item.italic
                                                                    ) {
                                                                      if (
                                                                        item.bold
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <em>
                                                                              <b>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </b>
                                                                            </em>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else if (
                                                                        item.underline
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <em>
                                                                              <u>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </u>
                                                                            </em>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <em>
                                                                              {
                                                                                styledText
                                                                              }
                                                                            </em>
                                                                          </React.Fragment>
                                                                        );
                                                                      }
                                                                    }

                                                                    if (
                                                                      item.bold
                                                                    ) {
                                                                      if (
                                                                        item.italic
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <b>
                                                                              <em>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </em>
                                                                            </b>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else if (
                                                                        item.underline
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <b>
                                                                              <u>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </u>
                                                                            </b>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <b>
                                                                              {
                                                                                styledText
                                                                              }
                                                                            </b>
                                                                          </React.Fragment>
                                                                        );
                                                                      }
                                                                    }
                                                                  }
                                                                )}
                                                              </a>
                                                            </React.Fragment>
                                                          );
                                                        }

                                                        let styledText =
                                                          item.text;

                                                        if (item.underline) {
                                                          if (item.italic) {
                                                            return (
                                                              <u key={i}>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </u>
                                                            );
                                                          }

                                                          if (item.bold) {
                                                            return (
                                                              <u key={i}>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </u>
                                                            );
                                                          }

                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                {styledText}
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        }

                                                        if (item.bold) {
                                                          if (item.italic) {
                                                            return (
                                                              <b key={i}>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </b>
                                                            );
                                                          }

                                                          if (item.underline) {
                                                            return (
                                                              <b key={i}>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </b>
                                                            );
                                                          }

                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                {styledText}
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        }

                                                        if (item.italic) {
                                                          if (item.bold) {
                                                            return (
                                                              <em key={i}>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </em>
                                                            );
                                                          }

                                                          if (item.underline) {
                                                            return (
                                                              <em key={i}>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </em>
                                                            );
                                                          }

                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                {styledText}
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }
                                                    )}
                                                  </h5>
                                                );

                                              case "heading-six":
                                                return (
                                                  <h6
                                                    key={i}
                                                    className='text-center text-lg font-semibold cursor-default'
                                                  >
                                                    {data.children.map(
                                                      (item, i) => {
                                                        if (
                                                          item.type === "link"
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <a
                                                                href={item.href}
                                                                className='text-blue-500 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-700'
                                                                target={
                                                                  obj.openInNewTab
                                                                    ? "_blank"
                                                                    : "_self"
                                                                }
                                                              >
                                                                {item.children.map(
                                                                  (item, i) => {
                                                                    let styledText =
                                                                      item.text;

                                                                    if (
                                                                      item.underline
                                                                    ) {
                                                                      if (
                                                                        item.bold
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <u>
                                                                              <b>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </b>
                                                                            </u>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else if (
                                                                        item.italic
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <u>
                                                                              <em>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </em>
                                                                            </u>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <u>
                                                                              {
                                                                                styledText
                                                                              }
                                                                            </u>
                                                                          </React.Fragment>
                                                                        );
                                                                      }
                                                                    }

                                                                    if (
                                                                      item.italic
                                                                    ) {
                                                                      if (
                                                                        item.bold
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <em>
                                                                              <b>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </b>
                                                                            </em>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else if (
                                                                        item.underline
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <em>
                                                                              <u>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </u>
                                                                            </em>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <em>
                                                                              {
                                                                                styledText
                                                                              }
                                                                            </em>
                                                                          </React.Fragment>
                                                                        );
                                                                      }
                                                                    }

                                                                    if (
                                                                      item.bold
                                                                    ) {
                                                                      if (
                                                                        item.italic
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <b>
                                                                              <em>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </em>
                                                                            </b>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else if (
                                                                        item.underline
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <b>
                                                                              <u>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </u>
                                                                            </b>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <b>
                                                                              {
                                                                                styledText
                                                                              }
                                                                            </b>
                                                                          </React.Fragment>
                                                                        );
                                                                      }
                                                                    }
                                                                  }
                                                                )}
                                                              </a>
                                                            </React.Fragment>
                                                          );
                                                        }

                                                        let styledText =
                                                          item.text;

                                                        if (item.underline) {
                                                          if (item.italic) {
                                                            return (
                                                              <u key={i}>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </u>
                                                            );
                                                          }

                                                          if (item.bold) {
                                                            return (
                                                              <u key={i}>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </u>
                                                            );
                                                          }

                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <u>
                                                                {styledText}
                                                              </u>
                                                            </React.Fragment>
                                                          );
                                                        }

                                                        if (item.bold) {
                                                          if (item.italic) {
                                                            return (
                                                              <b key={i}>
                                                                <em>
                                                                  {styledText}
                                                                </em>
                                                              </b>
                                                            );
                                                          }

                                                          if (item.underline) {
                                                            return (
                                                              <b key={i}>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </b>
                                                            );
                                                          }

                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <b>
                                                                {styledText}
                                                              </b>
                                                            </React.Fragment>
                                                          );
                                                        }

                                                        if (item.italic) {
                                                          if (item.bold) {
                                                            return (
                                                              <em key={i}>
                                                                <b>
                                                                  {styledText}
                                                                </b>
                                                              </em>
                                                            );
                                                          }

                                                          if (item.underline) {
                                                            return (
                                                              <em key={i}>
                                                                <u>
                                                                  {styledText}
                                                                </u>
                                                              </em>
                                                            );
                                                          }

                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <em>
                                                                {styledText}
                                                              </em>
                                                            </React.Fragment>
                                                          );
                                                        }
                                                      }
                                                    )}
                                                  </h6>
                                                );

                                              case "paragraph":
                                                return (
                                                  <p
                                                    key={i}
                                                    className='text-center cursor-default'
                                                  >
                                                    {data.children.map(
                                                      (item, i) => {
                                                        if (
                                                          item.type === "link"
                                                        ) {
                                                          return (
                                                            <React.Fragment
                                                              key={i}
                                                            >
                                                              <a
                                                                href={item.href}
                                                                className='text-blue-500 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-700'
                                                                target={
                                                                  obj.openInNewTab
                                                                    ? "_blank"
                                                                    : "_self"
                                                                }
                                                              >
                                                                {item.children.map(
                                                                  (item, i) => {
                                                                    let styledText =
                                                                      item.text;

                                                                    if (
                                                                      item.underline
                                                                    ) {
                                                                      if (
                                                                        item.bold
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <u>
                                                                              <b>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </b>
                                                                            </u>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else if (
                                                                        item.italic
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <u>
                                                                              <em>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </em>
                                                                            </u>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <u>
                                                                              {
                                                                                styledText
                                                                              }
                                                                            </u>
                                                                          </React.Fragment>
                                                                        );
                                                                      }
                                                                    }

                                                                    if (
                                                                      item.italic
                                                                    ) {
                                                                      if (
                                                                        item.bold
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <em>
                                                                              <b>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </b>
                                                                            </em>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else if (
                                                                        item.underline
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <em>
                                                                              <u>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </u>
                                                                            </em>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <em>
                                                                              {
                                                                                styledText
                                                                              }
                                                                            </em>
                                                                          </React.Fragment>
                                                                        );
                                                                      }
                                                                    }

                                                                    if (
                                                                      item.bold
                                                                    ) {
                                                                      if (
                                                                        item.italic
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <b>
                                                                              <em>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </em>
                                                                            </b>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else if (
                                                                        item.underline
                                                                      ) {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <b>
                                                                              <u>
                                                                                {
                                                                                  styledText
                                                                                }
                                                                              </u>
                                                                            </b>
                                                                          </React.Fragment>
                                                                        );
                                                                      } else {
                                                                        return (
                                                                          <React.Fragment
                                                                            key={
                                                                              i
                                                                            }
                                                                          >
                                                                            <b>
                                                                              {
                                                                                styledText
                                                                              }
                                                                            </b>
                                                                          </React.Fragment>
                                                                        );
                                                                      }
                                                                    }
                                                                  }
                                                                )}
                                                              </a>
                                                            </React.Fragment>
                                                          );
                                                        }

                                                        let styledText =
                                                          item.text;

                                                        if (item.bold) {
                                                          if (item.italic) {
                                                            styledText = (
                                                              <b key={i}>
                                                                <em>
                                                                  {item.text}
                                                                </em>
                                                              </b>
                                                            );
                                                          } else if (
                                                            item.underline
                                                          ) {
                                                            styledText = (
                                                              <b key={i}>
                                                                <u>
                                                                  {item.text}
                                                                </u>
                                                              </b>
                                                            );
                                                          } else {
                                                            styledText = (
                                                              <b key={i}>
                                                                {item.text}
                                                              </b>
                                                            );
                                                          }
                                                        }

                                                        if (item.italic) {
                                                          if (item.bold) {
                                                            styledText = (
                                                              <em key={i}>
                                                                <b>
                                                                  {item.text}
                                                                </b>
                                                              </em>
                                                            );
                                                          } else if (
                                                            item.underline
                                                          ) {
                                                            styledText = (
                                                              <em key={i}>
                                                                <u>
                                                                  {item.text}
                                                                </u>
                                                              </em>
                                                            );
                                                          } else {
                                                            styledText = (
                                                              <em key={i}>
                                                                {item.text}
                                                              </em>
                                                            );
                                                          }
                                                        }

                                                        if (item.underline) {
                                                          if (item.bold) {
                                                            styledText = (
                                                              <u key={i}>
                                                                <b>
                                                                  {item.text}
                                                                </b>
                                                              </u>
                                                            );
                                                          } else if (
                                                            item.italic
                                                          ) {
                                                            styledText = (
                                                              <u key={i}>
                                                                <em>
                                                                  {item.text}
                                                                </em>
                                                              </u>
                                                            );
                                                          } else {
                                                            styledText = (
                                                              <u key={i}>
                                                                {item.text}
                                                              </u>
                                                            );
                                                          }
                                                        }

                                                        return (
                                                          <React.Fragment
                                                            key={i}
                                                          >
                                                            {styledText}
                                                          </React.Fragment>
                                                        );
                                                      }
                                                    )}
                                                  </p>
                                                );
                                            }
                                          })}
                                      </React.Fragment>
                                    );
                                }
                              })}
                            </td>
                          </React.Fragment>
                        );
                      })}
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </React.Fragment>
        );
      })}
    </table>
  );
};

export default Table;
