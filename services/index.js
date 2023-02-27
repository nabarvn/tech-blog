import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query GetPosts {
      assets {
        createdAt
        id
        publishedAt
        fileName
        url
        updatedAt
      }
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              image {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
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
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
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

export const getLatestPosts = async () => {
  const query = gql`
    query GetLatestPosts() {
      posts(
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
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              image {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
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
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getTagPosts = async (slug) => {
  const query = gql`
    query GetTagPosts($slug: String!) {
      postsConnection(where: { tags_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              image {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
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
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
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
        author {
          name
          image {
            url
          }
        }
        thumbnail {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};
