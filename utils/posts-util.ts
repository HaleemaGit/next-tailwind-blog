import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


// export interface postA {
//   Date: string;
//   isFeatured: Boolean;
//   content: string;
//     slug: any;
// }

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
    Date,
  isFeatured: Boolean,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => postA.Date > postB.Date ? -1 : 1);

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}