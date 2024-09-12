// pages/api/posts.js

export default function handler(req, res) {
    res.status(200).json([
      { id: '1', title: 'First Post', content: 'This is the content of the first post.' },
      { id: '2', title: 'Second Post', content: 'This is the content of the second post.' },
      // Add more posts as needed
    ]);
  }
  