// const handler = async (req, res) => {
//   if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   try {
//     await res
//       .revalidate("/")
//       .then(res.revalidate("/category"))
//       .then(res.revalidate("/post"))
//       .then(res.revalidate("/tag"));

//     return res.json({
//       revalidated: true,
//     });
//   } catch (err) {
//     return res.status(500).send("Error revalidating");
//   }
// };

const handler = async (req, res) => {
  const pathsToRevalidate = [
    "/",
    `/post/${req.body.data.slug}`,
    "/category",
    "/tag",
  ];

  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.body) {
    return res.status(422).json({ message: "Invalid request body" });
  }

  try {
    pathsToRevalidate.map(async (path) => {
      await res.revalidate(path);
    });
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
};

export default handler;
