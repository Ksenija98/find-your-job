import React, { useState } from 'react';
import Job from './Job';

const Jobs = ({ jobs, onAdd }) => {
  const [sortedJobs, setSortedJobs] = useState(jobs);

  const sortJobsByName = () => {
    if (sortedJobs && sortedJobs.length > 0) {
    const sorted = [...sortedJobs].sort((a, b) => {
      return a.jobTitle.localeCompare(b.jobTitle);
    });
    setSortedJobs(sorted);
  }
  };

  return (
    <div className='jobs-page'>
      <button onClick={sortJobsByName}>Sort jobs by name</button>
      <div className='jobs'>
        
        {sortedJobs && sortedJobs.length > 0 ? (
          <>
            {sortedJobs.map((j) => (
              <Job job={j} key={j.id} onAdd={onAdd} />
            ))}
          </>
        ) : (
          <div className='noAppliedJobs'>
            <h1 className='noJobsInAppliedJobs'>No open positions for application.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
