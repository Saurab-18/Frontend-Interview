import { useState, useEffect } from "react";
import { PostCard } from "../components/PostCard";
import { useParams } from "react-router-dom";

export const Details = () => {
  const [post, setPost] = useState([]);

  const { postId } = useParams();

  const fetchPosts = async () => {
    let data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    let json = await data.json();
    setPost(json);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>This is particular posts detail page</h1>
      <PostCard post={post} />
    </>
  );
};
