import Head from "next/head";
// Library
import Prismic from "@prismicio/client";
import convertPrismicToData from "../../utils/convertPrismicToData";
// Components
import Header from "../../components/Header";
import BlogPost from "../../components/BlogPost";
// Styles
import styles from "../../styles/BlogPage.module.css";

// One day in seconds
const ONE_DAY_IN_SECONDS = 86400;

// Function Connect to Prismic
export async function getStaticProps(context) {
  // Connect to prismic
  const apiEndpoint = "https://cakurang-try-prismic.prismic.io/api/v2";
  const client = Prismic.client(apiEndpoint);
  // Query by UID from Prismic
  const data = await client.getByUID("blog_post", context.params.slug);

  console.log(data);
  // const posts = data.results.map(convertPrismicToData);

  return {
    props: {
      data: convertPrismicToData(data),
      revalidate: ONE_DAY_IN_SECONDS, // one day,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", // false or 'blocking'
  };
}

export default function Blog({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.post}>
          <BlogPost {...data} />
        </div>
      </main>
    </div>
  );
}
