import styles from "@/styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";

const graphCMS = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cle1jmfnd3mz501rra1gwhaly/master"
);

export async function getStaticProps({ params }) {
  const { post } = await graphCMS.request(
    `
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
            title
            datePublished
            id
            coverPhoto {
              id
              url
            }
            content {
              html
            }
            author {
              name
              avatar {
                url
              }
            }
            slug
          
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
  console.log(post);
  return (
    <div className={styles.article}>
      <Image width={500} height={500} src={post.coverPhoto.url} />
      <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
    </div>
  );
};

export default Article;
