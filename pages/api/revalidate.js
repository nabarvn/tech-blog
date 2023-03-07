//Test Attempt1
// export default async function handler(req, res) {
//   const action = req.body.operation;
//   const model = req.body.data.__typename;
//   const slug = req.body.data.slug;
//   let pathsToRevalidate = [];

//   if (action === "update" && model === "Post") {
//     pathsToRevalidate = [
//       `/`,
//       `/post/${slug}`,
//       `/category/dsa`,
//       `/category/web-development`,
//       `/category/blockchain-engineering`,
//       `/tag/react`,
//       `/tag/solidity`,
//       `/tag/web3`,
//       `/tag/dsa`,
//     ];
//   } else {
//     switch (model) {
//       case "Post":
//         pathsToRevalidate = [`/post/${slug}`];
//         break;

//       case "Category":
//         pathsToRevalidate = [`/category/${slug}`];
//         break;

//       case "Tag":
//         pathsToRevalidate = [`/tag/${slug}`];
//         break;

//       default:
//         pathsToRevalidate = [`/`];
//         break;
//     }
//   }

//   if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   try {
//     pathsToRevalidate.forEach(async (path) => {
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

// Test Attempt2
// import {
//   getCategories,
//   getCategoryPosts,
//   getTagPosts,
//   getTags,
// } from "../../services";

// export default async function handler(req, res) {
//   const body = req.body;
//   const model = body.data.__typename;

//   const categories = await getCategories();
//   const categoryPosts = await getCategoryPosts();
//   const tags = await getTags();
//   const tagPosts = await getTagPosts();

//   let pathsToRevalidate = [];
//   let articleSlugs = [];
//   let articlePaths = [];
//   let articleCategorySlugs = [];
//   let articleCategoryPaths = [];
//   let articleTagSlugs = [];
//   let articleTagPaths = [];

//   switch (model) {
//     case "Post":
//       body.data.categories.forEach((category) => {
//         categories.forEach((articleCategory) => {
//           if (category.id === articleCategory.id) {
//             articleCategorySlugs = [
//               ...articleCategorySlugs,
//               `${articleCategory.slug}`,
//             ];
//           }
//         });
//       });

//       body.data.tags.forEach((tag) => {
//         tags.forEach((articleTag) => {
//           if (tag.id === articleTag.id) {
//             articleTagSlugs = [...articleTagSlugs, `${articleTag.slug}`];
//           }
//         });
//       });

//       articleCategorySlugs.forEach((slug) => {
//         articleCategoryPaths = [...articleCategoryPaths, `/category/${slug}`];
//       });

//       articleTagSlugs.forEach((slug) => {
//         articleTagPaths = [...articleTagPaths, `/tag/${slug}`];
//       });

//       pathsToRevalidate = [
//         `/`,
//         `/post/${body.data.slug}`,
//         ...articleCategoryPaths,
//         ...articleTagPaths,
//       ];

//       break;

//     case "Category":
//       body.data.posts.forEach((postItem) => {
//         categoryPosts.forEach((post) => {
//           if (postItem.id === post.cursor) {
//             articleSlugs = [...articleSlugs, `${post.node.slug}`];
//           }
//         });
//       });

//       articleSlugs.forEach((slug) => {
//         articlePaths = [...articlePaths, `/post/${slug}`];
//       });

//       pathsToRevalidate = [`/`, ...articlePaths, `/category/${body.data.slug}`];

//       break;

//     case "Tag":
//       body.data.posts.forEach((postItem) => {
//         tagPosts.forEach((post) => {
//           if (postItem.id === post.cursor) {
//             articleSlugs = [...articleSlugs, `${post.node.slug}`];
//           }
//         });
//       });

//       articleSlugs.forEach((slug) => {
//         articlePaths = [...articlePaths, `/post/${slug}`];
//       });

//       pathsToRevalidate = [`/`, ...articlePaths, `/tag/${body.data.slug}`];

//       break;

//     default:
//       pathsToRevalidate = [`/`];

//       break;
//   }

//   // Check for secret to confirm this is a valid request
//   if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   try {
//     pathsToRevalidate.forEach(async (path) => {
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

//Test Attempt3
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

//Test Attempt4
import { getCategories, getTags } from "../../services";

export default async function handler(req, res) {
  const action = req.body.operation;
  const model = req.body.data.__typename;
  const slug = req.body.data.slug;

  const categories = await getCategories();
  const tags = await getTags();

  let pathsToRevalidate = [];
  let articleCategorySlugs = [];
  let articleCategoryPaths = [];
  let articleTagSlugs = [];
  let articleTagPaths = [];

  if (
    (action === "update" && model === "Post") ||
    (action === "delete" && model === "Post")
  ) {
    req.body.data.categories.forEach((category) => {
      categories.forEach((articleCategory) => {
        if (category.id === articleCategory.id) {
          articleCategorySlugs = [
            ...articleCategorySlugs,
            `${articleCategory.slug}`,
          ];
        }
      });
    });

    req.body.data.tags.forEach((tag) => {
      tags.forEach((articleTag) => {
        if (tag.id === articleTag.id) {
          articleTagSlugs = [...articleTagSlugs, `${articleTag.slug}`];
        }
      });
    });

    articleCategorySlugs.forEach((slug) => {
      articleCategoryPaths = [...articleCategoryPaths, `/category/${slug}`];
    });

    articleTagSlugs.forEach((slug) => {
      articleTagPaths = [...articleTagPaths, `/tag/${slug}`];
    });

    pathsToRevalidate = [
      `/`,
      `/post/${slug}`,
      ...articleCategoryPaths,
      ...articleTagPaths,
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
