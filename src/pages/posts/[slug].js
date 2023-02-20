import styles from "@/styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";

const graphCMS = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cle1jmfnd3mz501rra1gwhaly/master"
);

export async function getStaticProps({ params }) {
  const { post } = await graphCMS.request(
    `
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
          id
        }
      }
    `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphCMS.request(`
      {
        posts {
          slug
          id
        }
      }
    `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

const Article = ({ post }) => {
  return <div>{JSON.stringify(post)}</div>;
};

export default Article;
