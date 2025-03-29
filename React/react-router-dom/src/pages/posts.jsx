import { useEffect, useState } from "react";
import { PostCard } from "../components/PostCard";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await data.json();
    setPosts(json);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1 className="mb-5">Hii This is a Posts Page</h1>
      <div className="flex flex-col gap-5">
        {posts &&
          posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
      </div>
    </>
  );
};
