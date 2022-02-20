import Link from "next/link";
import { useMemo } from "react";
// Librery
import ReactMarkdown from "react-markdown";
// Styling
import styles from "../styles/BlogPost.module.css";

const BlogPost = ({ slug, title, contents, isMainPage = false }) => {
  const htmlContent = useMemo(() => contents, [contents]);

  return (
    <article className={styles.post}>
      {slug != "about" ? (
        <Link href={"/blog/" + slug}>
          <a>
            {isMainPage ? (
              <h1 className={styles.title}>{title}</h1>
            ) : (
              <h2 className={styles.title}>{title}</h2>
            )}
          </a>
        </Link>
      ) : isMainPage ? (
        <h1 className={styles.title}>{title}</h1>
      ) : (
        <h2 className={styles.title}>{title}</h2>
      )}
      <ReactMarkdown className={styles.content}>{htmlContent}</ReactMarkdown>
    </article>
  );
};

export default BlogPost;
