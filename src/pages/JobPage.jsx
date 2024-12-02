import { useState, useEffect } from "react";

const JobPage = () => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {

    }

    fetchJob();
  }, [])

  return <div>JobPage</div>;
};

export default JobPage;
