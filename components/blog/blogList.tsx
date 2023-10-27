import styles from "./BlogList.module.scss";
import type { Article } from "@/types/blog";
import BlogItem from "./blogItem";

type Props = {
  blog: Array<Article>
}

function BlogList({ blog }: Props) {


  return (
    <ul className={styles.list}>
      {
        blog.map((blogItems) => {
          return <BlogItem blogItem={blogItems}></BlogItem>;
        })
      }
    </ul>

  )
}

export default BlogList;