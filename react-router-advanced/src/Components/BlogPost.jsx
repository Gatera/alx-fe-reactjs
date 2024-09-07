import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
    const { id } = useParams();

  return (
    <div>
        <h1>Blog Post {id}</h1>
        <p>Content for blog post ID {id} goes here.</p>
    </div>
  );
}

export default BlogPost