import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import { PostProps } from "../../components/Post";
import { PrismaClient } from "@prisma/client";
import { Head } from "next/document";
import PostContent from "../../components/posts/post-detail/post-content";

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
  });
  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
};

function Post(props: any) {
  let title = props.post.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="content" content={props.post.content} />
      </Head>
      <p>By {props?.author?.name || "Unknown author"}</p>
      <ReactMarkdown children={props.post.content} />
      <PostContent post={props.post} />
    </Fragment>
    // <Layout>
    //   <div>
    //     <h2>{title}</h2>
    //     <p>By {props?.author?.name || "Unknown author"}</p>
    //     <ReactMarkdown children={props.post.description} />
    //   </div>
    //   <style jsx>{`
    //     .page {
    //       background: white;
    //       padding: 2rem;
    //     }

    //     .actions {
    //       margin-top: 2rem;
    //     }

    //     button {
    //       background: #ececec;
    //       border: 0;
    //       border-radius: 0.125rem;
    //       padding: 1rem 2rem;
    //     }

    //     button + button {
    //       margin-left: 1rem;
    //     }
    //   `}</style>
    // </Layout>
  );
}

export default Post;
