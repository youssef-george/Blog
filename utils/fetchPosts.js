// utils/fetchPosts.js

export default async function fetchPosts() {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();
    return posts;
  }
  