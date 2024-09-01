import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return (
    <div>
      <h1>Blog Post {postId}</h1>
      {/* Fetch and display the blog post using postId */}
    </div>
  );
}

export default BlogPost;