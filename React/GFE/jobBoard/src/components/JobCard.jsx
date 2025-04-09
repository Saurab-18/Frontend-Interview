import { useEffect, useState } from "react";
import "../components/JobCard.css";

export const JobCard = ({ jobId }) => {
  //   console.log("Job id", jobId);

  const [jobDetails, setJobDetails] = useState([]);

  const fetchJobDetails = async () => {
    try {
      const jobs = jobId.map(async (j) => {
        const data = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${j}.json`
        );
        return await data.json();
      });

      const jobInfo = await Promise.all(jobs);
      setJobDetails(jobInfo);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobDetails();
  }, [jobId]);

  return (
    <>
      {jobDetails.map((detail) => {
        return (
          <div key={detail.id} className="job-card">
            <h5>{detail.title}</h5>
            <div>
              <span>{detail.by}</span>
              <span>{detail.time}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
