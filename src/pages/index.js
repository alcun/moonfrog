import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/BlogCard/BlogCard";
import Link from "next/link";

const graphCMS = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cle1jmfnd3mz501rra1gwhaly/master"
);

const QUERY = gql`
  {
    posts(orderBy: datePublished_DESC) {
      title
      datePublished
      id

      coverPhoto {
        id
        url
      }
      content {
        text
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
`;

export async function getStaticProps() {
  const { posts } = await graphCMS.request(QUERY);
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <>
      <Head>
        <title>Moonfrog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* {JSON.stringify(posts)} */}
        <div className={styles.cardGrid}>
          {posts.map((post, i) => {
            return (
              <BlogCard
                key={post.id}
                author={post.author}
                coverPhoto={post.coverPhoto}
                postTitle={post.title}
                datePublished={post.datePublished}
                postText={post.content.text}
                slug={post.slug}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
