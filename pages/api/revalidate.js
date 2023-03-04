// import useGlobalContext from "../../hooks/globalContext";
// import { getCategoryPosts, getTagPosts } from "../../services";

// import { useEffect, useState } from "react";

// export default async function handler(req, res) {
//   const { verifyWebhookSignature } = require("@hygraph/utils");
//   const { categories, tags } = useGlobalContext();

//   const [pathsToRevalidate, setPathsToRevalidate] = useState([]);
//   const [categoryPosts, setCategoryPosts] = useState([]);
//   const [tagPosts, setTagPosts] = useState([]);
//   const [articleCategorySlugs, setArticleCategorySlugs] = useState([]);
//   const [articleTagSlugs, setArticleTagSlugs] = useState([]);
//   const [articleSlugs, setArticleSlugs] = useState([]);

//   useEffect(() => {
//     const fetchData = async (slug) => {
//       const categoryPosts = await getCategoryPosts(slug);
//       const tagPosts = await getTagPosts(slug);

//       setCategoryPosts(categoryPosts);
//       setTagPosts(tagPosts);
//     };

//     fetchData(req.body.data.slug);
//   }, [req.body]);

//   const webhookToken = process.env.REVALIDATE_TOKEN;

//   const { body } = req.body;
//   const signature = req.headers["Gcms-signature"];

//   const isValid = verifyWebhookSignature({ body, signature, secret });

//   switch (body.data.__typename) {
//     case "Post":
//       body.data.categories.map((category) => {
//         categories.map((articleCategory) => {
//           if (category.id === articleCategory.id) {
//             setArticleCategorySlugs([
//               ...articleCategorySlugs,
//               articleCategory.slug,
//             ]);
//           }
//         });
//       });

//       body.data.tags.map((tag) => {
//         tags.map((articleTag) => {
//           if (tag.id === articleTag.id) {
//             setArticleTagSlugs([...articleTagSlugs, articleTag.slug]);
//           }
//         });
//       });

//       const articleCategoryPaths = articleCategorySlugs.map((slug) => {
//         return `/category/${slug}`;
//       });

//       const articleTagPaths = articleTagSlugs.map((slug) => {
//         return `/tag/${slug}`;
//       });

//       setPathsToRevalidate([
//         "/",
//         `/post/${body.data.slug}`,
//         ...articleCategoryPaths,
//         ...articleTagPaths,
//       ]);

//       break;

//     case "Category":
//       body.data.posts.map((postItem) => {
//         categoryPosts.map((post) => {
//           if (postItem.id === post.cursor) {
//             setArticleSlugs([...articleSlugs, post.node.slug]);
//           }
//         });
//       });

//       const categoryArticlePaths = articleSlugs.map((slug) => {
//         return `/post/${slug}`;
//       });

//       setPathsToRevalidate([
//         "/",
//         ...categoryArticlePaths,
//         `/category/${body.data.slug}`,
//       ]);

//       break;

//     case "Tag":
//       body.data.posts.map((postItem) => {
//         tagPosts.map((post) => {
//           if (postItem.id === post.cursor) {
//             setArticleSlugs([...articleSlugs, post.node.slug]);
//           }
//         });
//       });

//       const articlePaths = articleSlugs.map((slug) => {
//         return `/post/${slug}`;
//       });

//       setPathsToRevalidate(["/", ...articlePaths, `/tag/${body.data.slug}`]);

//       break;

//     default:
//       setPathsToRevalidate(["/"]);

//       break;
//   }

//   // Check for secret to confirm this is a valid request
//   if (req.query.secret !== webhookToken || !isValid) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   if (!body) {
//     return res.status(422).json({ message: "Invalid request body" });
//   }

//   try {
//     pathsToRevalidate.map(async (path) => {
//       try {
//         await res.revalidate(path);
//       } catch (error) {
//         console.error(`Error revalidating ${path}: ${error.message}`);
//       }
//     });

//     return res.status(200).json({ revalidated: true });
//   } catch (error) {
//     console.error(`Error revalidating paths: ${error.message}`);
//     return res.status(500).json({ message: "Error revalidating paths" });
//   }
// }

// export default async function handler(req, res) {
//   const { verifyWebhookSignature } = require("@hygraph/utils");

//   const webhookToken = process.env.REVALIDATE_TOKEN;

//   const { body } = req.body;
//   const signature = req.headers["Gcms-signature"];

//   const isValid = verifyWebhookSignature({ body, signature, secret });

//   // Check for secret to confirm this is a valid request
//   if (req.query.secret !== webhookToken || !isValid) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   if (!req.body) {
//     return res.status(422).json({ message: "Invalid request body" });
//   }

//   try {
//     await res.revalidate("/");
//     return res.status(200).json({ revalidated: true });
//   } catch (err) {
//     return res.status(500).send("Error revalidating");
//   }
// }

// export default async function handler(req, res) {
//   const { verifyWebhookSignature } = require("@hygraph/utils");

//   const webhookToken = process.env.REVALIDATE_TOKEN;

//   const body = req.body;
//   const signature = req.headers["Gcms-signature"];

//   const isValid = verifyWebhookSignature({ body, signature, secret });

//   // Check for secret to confirm this is a valid request
//   if (req.query.secret !== webhookToken || !isValid) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   if (!body) {
//     return res.status(422).json({ message: "Invalid request body" });
//   }

//   try {
//     await res.revalidate("/");
//     return res.status(200).json({ revalidated: true });
//   } catch (err) {
//     return res.status(500).send("Error revalidating");
//   }
// }

// export default async function handler(req, res) {
//   const model = req.body.data.__typename;
//   const slug = req.body.data.slug;
//   let pathToRevalidate = ``;

//   switch (model) {
//     case "Post":
//       pathToRevalidate = `/post/${slug}`;
//       break;

//     case "Category":
//       pathToRevalidate = `/category/${slug}`;
//       break;

//     case "Tag":
//       pathToRevalidate = `/tag/${slug}`;
//       break;

//     default:
//       pathToRevalidate = `/`;
//       break;
//   }

//   if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   try {
//     await res.revalidate(pathToRevalidate);
//     return res.json({ revalidated: true });
//   } catch (err) {
//     return res.status(500).send("Error revalidating");
//   }
// }

export default async function handler(req, res) {
  const action = req.body.operation;
  const model = req.body.data.__typename;
  const slug = req.body.data.slug;
  let pathsToRevalidate = [];

  if (action === "update" && model === "Post") {
    // const categories = req.body.data.categories;
    // const tags = req.body.data.tags;

    // categories.forEach((category) => {
    //   if (category.id === "clab85xm32ptn0appmpdm4znu") {
    //     tags.forEach((tag) => {
    //       if (tag.id === "clb59ix6d0pjv0apmxtm7ht6s") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/dsa`,
    //           `/tag/react`,
    //           ...pathsToRevalidate,
    //         ];
    //       }

    //       if (tag.id === "clb59u4rd0prn0apmkr7tnqgf") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/dsa`,
    //           `/tag/solidity`,
    //           ...pathsToRevalidate,
    //         ];
    //       }

    //       if (tag.id === "clb5hv0hf0wua0bo8j9cqwebn") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/dsa`,
    //           `/tag/web3`,
    //           ...pathsToRevalidate,
    //         ];
    //       }

    //       if (tag.id === "cleirgspm04qt0bpk4arkowp4") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/dsa`,
    //           `/tag/dsa`,
    //           ...pathsToRevalidate,
    //         ];
    //       }
    //     });
    //   }

    //   if (category.id === "clab87n4x2pyt0appgdq0n4mu") {
    //     tags.forEach((tag) => {
    //       if (tag.id === "clb59ix6d0pjv0apmxtm7ht6s") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/web-development`,
    //           `/tag/react`,
    //           ...pathsToRevalidate,
    //         ];
    //       }

    //       if (tag.id === "clb59u4rd0prn0apmkr7tnqgf") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/web-development`,
    //           `/tag/solidity`,
    //           ...pathsToRevalidate,
    //         ];
    //       }

    //       if (tag.id === "clb5hv0hf0wua0bo8j9cqwebn") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/web-development`,
    //           `/tag/web3`,
    //           ...pathsToRevalidate,
    //         ];
    //       }

    //       if (tag.id === "cleirgspm04qt0bpk4arkowp4") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/web-development`,
    //           `/tag/dsa`,
    //           ...pathsToRevalidate,
    //         ];
    //       }
    //     });
    //   }

    //   if (category.id === "clab8az412q0x0app8jqpg0yx") {
    //     tags.forEach((tag) => {
    //       if (tag.id === "clb59ix6d0pjv0apmxtm7ht6s") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/blockchain-engineering`,
    //           `/tag/react`,
    //           ...pathsToRevalidate,
    //         ];
    //       }

    //       if (tag.id === "clb59u4rd0prn0apmkr7tnqgf") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/blockchain-engineering`,
    //           `/tag/solidity`,
    //           ...pathsToRevalidate,
    //         ];
    //       }

    //       if (tag.id === "clb5hv0hf0wua0bo8j9cqwebn") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/blockchain-engineering`,
    //           `/tag/web3`,
    //           ...pathsToRevalidate,
    //         ];
    //       }

    //       if (tag.id === "cleirgspm04qt0bpk4arkowp4") {
    //         pathsToRevalidate = [
    //           `/`,
    //           `/post/${slug}`,
    //           `/category/blockchain-engineering`,
    //           `/tag/dsa`,
    //           ...pathsToRevalidate,
    //         ];
    //       }
    //     });
    //   }
    // });

    pathsToRevalidate = [
      `/`,
      `/post/${slug}`,
      `/category/dsa`,
      `/category/web-development`,
      `/category/blockchain-engineering`,
      `/tag/react`,
      `/tag/solidity`,
      `/tag/web3`,
      `/tag/dsa`,
      ...pathsToRevalidate,
    ];
  } else {
    switch (model) {
      case "Post":
        pathsToRevalidate = [`/post/${slug}`];
        break;

      case "Category":
        pathsToRevalidate = [`/category/${slug}`];
        break;

      case "Tag":
        pathsToRevalidate = [`/tag/${slug}`];
        break;

      default:
        pathsToRevalidate = [`/`];
        break;
    }
  }

  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    pathsToRevalidate.forEach(async (path) => {
      try {
        await res.revalidate(path);
      } catch (error) {
        console.error(`Error revalidating ${path}: ${error.message}`);
      }
    });

    return res.status(200).json({ revalidated: true });
  } catch (error) {
    console.error(`Error revalidating paths: ${error.message}`);
    return res.status(500).json({ message: "Error revalidating paths" });
  }
}
