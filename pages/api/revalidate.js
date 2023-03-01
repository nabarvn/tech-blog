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

// export default handler;

const handler = async (req, res) => {
  await res.revalidate("/");

  const pathToRevalidate = `/${
    req.body?.record?.id || req.body?.old_record?.id
  }`;
  await res.revalidate(pathToRevalidate);

  return res.send({ revalidated: true });
};

export default handler;
