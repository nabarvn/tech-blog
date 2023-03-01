const handler = async (req, res) => {
  if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/");
    await res.revalidate("/category");
    await res.revalidate("/post");
    await res.revalidate("/tag");

    return res.json({
      revalidated: true,
    });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
};

export default handler;
