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

export default async function handler(req, res) {
  const { verifyWebhookSignature } = require("@hygraph/utils");

  const webhookToken = process.env.REVALIDATE_TOKEN;

  const body = req.body;
  const signature = req.headers["Gcms-signature"];

  const isValid = verifyWebhookSignature({ body, signature, secret });

  // Check for secret to confirm this is a valid request
  if (req.query.secret !== webhookToken || !isValid) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!body) {
    return res.status(422).json({ message: "Invalid request body" });
  }

  try {
    await res.revalidate("/");
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
