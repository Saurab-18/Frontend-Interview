import { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
export const JobBoard = () => {
  const showJobs = 6;

  const [jobId, setJobId] = useState([]);
  const [count, setCount] = useState(showJobs);

  const fetchJobId = async () => {
    let response = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    );
    let data = await response.json();
    setJobId(data.slice(0, count));
  };

  useEffect(() => {
    fetchJobId();
  }, [count]);

  const handleMore = () => {
    setCount((count) => count + 6);
  };

  const showButton = jobId.length == count ? true : false;

  return (
    <>
      <h1>Hacker News Job Board</h1>
      <JobCard jobId={jobId} />
      {showButton && (
        <button
          onClick={() => {
            handleMore();
          }}
        >
          Load More
        </button>
      )}
    </>
  );
};
