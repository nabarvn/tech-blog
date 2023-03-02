// import useGlobalContext from "../../hooks/globalContext";
// import { getCategoryPosts, getTagPosts } from "../../services";

// const handler = async (req, res) => {
//   const { articleCategories, articleTags } = useGlobalContext();

//   const [pathsToRevalidate, setPathsToRevalidate] = useState([]);
//   const [categoryPosts, setCategoryPosts] = useState([]);
//   const [tagPosts, setTagPosts] = useState([]);
//   const [articleCategorySlugs, setArticleCategorySlugs] = useState([]);
//   const [articleTagSlugs, setArticleTagSlugs] = useState([]);
//   const [articleSlugs, setArticleSlugs] = useState([]);

//   useEffect(async () => {
//     const categoryPosts = await getCategoryPosts(req.body.data.slug);
//     const tagPosts = await getTagPosts(req.body.data.slug);

//     setCategoryPosts(categoryPosts);
//     setTagPosts(tagPosts);
//   }, [req]);

//   switch (req.body.data.__typename) {
//     case "Post":
//       req.body.data.categories.map((category) => {
//         articleCategories.map((articleCategory) => {
//           if (category.id === articleCategory.id) {
//             setArticleCategorySlugs([
//               ...articleCategorySlugs,
//               articleCategory.slug,
//             ]);
//           }
//         });
//       });

//       req.body.data.tags.map((tag) => {
//         articleTags.map((articleTag) => {
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
//         `/post/${req.body.data.slug}`,
//         ...articleCategoryPaths,
//         ...articleTagPaths,
//       ]);

//       break;

//     case "Category":
//       req.body.data.posts.map((postItem) => {
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
//         `/category/${req.body.data.slug}`,
//       ]);

//       break;

//     case "Tag":
//       req.body.data.posts.map((postItem) => {
//         tagPosts.map((post) => {
//           if (postItem.id === post.cursor) {
//             setArticleSlugs([...articleSlugs, post.node.slug]);
//           }
//         });
//       });

//       const articlePaths = articleSlugs.map((slug) => {
//         return `/post/${slug}`;
//       });

//       setPathsToRevalidate([
//         "/",
//         ...articlePaths,
//         `/tag/${req.body.data.slug}`,
//       ]);

//       break;

//     default:
//       setPathsToRevalidate(["/"]);

//       break;
//   }

//   // Check for secret to confirm this is a valid request
//   if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   if (!req.body) {
//     return res.status(422).json({ message: "Invalid request body" });
//   }

//   try {
//     pathsToRevalidate.map(async (path) => {
//       await res.revalidate(path);
//     });
//     return res.status(200).json({ revalidated: true });
//   } catch (err) {
//     return res.status(500).send("Error revalidating");
//   }
// };

// export default handler;

const handler = async (req, res) => {
  const path = require("path");
  const [pathToRevalidate, setPathToRevalidate] = useState("");

  useEffect(() => {
    setPathToRevalidate(
      path.join(`/${req.body.data.__typename.toLower()}/`, req.body.data.slug)
    );
  }, [req]);

  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.body) {
    return res.status(422).json({ message: "Invalid request body" });
  }

  try {
    await res.revalidate(pathToRevalidate);
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
};

export default handler;
