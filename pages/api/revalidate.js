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

import path from "path";

const handler = async (req, res) => {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.body) {
    return res.status(422).json({ message: "Invalid request body" });
  }

  try {
    await res.revalidate(req.query.path);
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
};

export default handler;
