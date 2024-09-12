import fetchPosts from '../../utils/fetchPosts';
import Layout from '../../components/Layout';

export default function Post({ post }) {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const posts = await fetchPosts();
  const post = posts.find(p => p.id === id);

  return { props: { post } };
}
