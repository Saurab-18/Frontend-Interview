import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <Link
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        to={`/details/${post.id}`}
      >
        Post Details
      </Link>
    </div>
  );
};
