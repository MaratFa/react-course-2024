import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from '../components/Spinner';

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/job/${id}`);
        const data = await res.json();
        setJob();
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }

    fetchJob();
  }, [])

  return loading ? <Spinner /> : (
    <h1>Job</h1>
  )
  };

export default JobPage;
