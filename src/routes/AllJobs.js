import React, { useEffect, useState } from 'react';
import '../styles/AllJobsStyles.css';
import axios from 'axios';

const AllJobs = () => {
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    axios
      .get('/jobs/all', {
        params: {
          company_num_employees: '',
          employment_type: '',
          location: '',
          order_by: '',
          page: 1,
          remote: '',
          search: '',
          source: '',
        },
      })
      .then(response => {
        console.log('the job data', response.data);
        setDisplayJobs(response.data.results);
      });
  }, []);

  const removeHtmlTags = input => {
    return input.replace(/<[^>]*>/g, '');
  };

  return (
    <div className="jobs-box">
      <h1>This is the All job board</h1>
      <div className="display-jobs">
        {displayJobs.map(data => {
          return (
            <div className="jobs-list">
              <div>{data.company_name}</div>
              <div>{data.role}</div>
              <div>{data.date_posted}</div>
              <div>{data.url}</div>
              <div>{removeHtmlTags(data.text)}</div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};

export default AllJobs;
