import "./App.css";
import PostCard from "./components/PostCard";
import { useGetPostsQuery } from "./redux/api";

function App() {
  const { data } = useGetPostsQuery("");
  console.log(data);

  return (
    <>
      {data?.map((item) => {
        return <PostCard post={item} />;
      })}
    </>
  );
}

export default App;
