import React from 'react'

const Job = ({job, onAdd, onRemove, applied}) => {
  return (
    <div className='job'>
        <img src={job.companyLogo} alt="Job image" className="job-image" />
        <div className="job-body">
        <h3 className="company-name">{job.companyName}</h3>
            <h2 className="job-name">{job.jobTitle}</h2>
            <p className="job-type">{job.jobType}</p>
            {applied === 1 ? (<button onClick={() => onRemove(job.id)}>Remove application</button>) 
            : 
            (<button onClick={() => onAdd(job.id)}>Apply</button>)
             }         
        </div>    
    </div>
  )
}

export default Job