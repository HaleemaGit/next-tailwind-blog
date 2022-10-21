import { Fragment } from 'react';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import Post, { PostProps } from "../components/Post";
import { getPosts } from "../services/post";
import BlogForm from "../services/blogForm";

import prisma from '../lib/prisma';
import { GetStaticProps } from 'next';

type Props = {
  data: PostProps[];
};

// export const getStaticProps: GetStaticProps = async () => {
//   console.log("We're HERE");
//   const data = await getPosts();
//   return {
//     props: {
//       data: JSON.parse(JSON.stringify(data)),
//     },
//     revalidate: 10,
//   };
// };
// // index.tsx
// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// };

function HomePage(props: any) {
  return (
    <Fragment>
      <Head>
        <title>Hali's Next-Tailwind Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <BlogForm />
      <div>{props.data.map((post: any) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}</div>
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

 export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();
  const data = await getPosts();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      posts: featuredPosts,
    },
  };
}

export default HomePage;
