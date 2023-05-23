import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query GetPosts {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        title
        createdAt
        excerpt
        author {
          id
          name
          bio
          image {
            url
          }
        }
        thumbnail {
          url
        }
        categories {
          name
          slug
        }
        tags {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        thumbnail {
          url
        }
        author {
          id
          name
          bio
          image {
            url
          }
        }
        createdAt
        slug
        categories {
          name
          slug
        }
        tags {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getOldestPosts = async () => {
  const query = gql`
    query GetOldestPosts() {
      posts(
        orderBy: createdAt_ASC
        first: 3
      ) {
        title
        thumbnail {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getSimilarPosts = async (slug, categories) => {
  const query = gql`
    query GetSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        orderBy: createdAt_DESC
        first: 3
      ) {
        title
        thumbnail {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        id
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getTags = async () => {
  const query = gql`
    query GetTags {
      tags {
        id
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.tags;
};

export const getAuthor = async () => {
  const query = gql`
    query GetAuthor {
      author(where: { id: "cla6t5red462i0co7q48jsti7" }) {
        name
        bio
        image {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.author;
};

export const getCategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      posts(
        where: { categories_some: { slug: $slug } }
        orderBy: createdAt_DESC
      ) {
        id
        slug
        title
        createdAt
        excerpt
        author {
          id
          name
          bio
          image {
            url
          }
        }
        thumbnail {
          url
        }
        categories {
          name
          slug
        }
        tags {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.posts;
};

export const getTagPosts = async (slug) => {
  const query = gql`
    query GetTagPosts($slug: String!) {
      posts(where: { tags_some: { slug: $slug } }, orderBy: createdAt_DESC) {
        id
        slug
        title
        createdAt
        excerpt
        author {
          id
          name
          bio
          image {
            url
          }
        }
        thumbnail {
          url
        }
        categories {
          name
          slug
        }
        tags {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.posts;
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPosts() {
      posts(where: {featuredPost: true}) {
        title
        slug
        createdAt
        author {
          name
          image {
            url
          }
        }
        thumbnail {
          url
        }
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};
