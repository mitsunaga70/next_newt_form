import Image from 'next/image'
import styles from './page.module.css'
import { newtClient } from "@/libs/newt";
import BlogList from '../../components/blog/blogList'
import Container from '@/components/container';




export default async function Home() {
  const { items: blog } = await newtClient.getContents({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body", "coverImage", "tags"],
      order: ["-_priority", "-_sys.customOrder"],

    },
  });

  return (
    <>
      <Container>
        <BlogList blog={blog}></BlogList>
      </Container>
    </>
  )
}

