import Link from "next/link";
// Utils
import formatDate from "../utils/formatDate";
// Styling
import styles from "../styles/BlogPostArchiveLink.module.css";

const BlogPostArchiveLink = ({ slug, title, date }) => {
  return (
    <div className={styles.post}>
      <Link href={"/blog/" + slug}>
        <a className={styles.title}>{title}</a>
      </Link>
      <time>{formatDate(date)}</time>
    </div>
  );
};

export default BlogPostArchiveLink;
