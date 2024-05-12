import React from 'react'
import Job from './Job'

const AppliedJobs = ({appliedJobs, onRemove}) => {
  return (
    <div className="applied-jobs">
      <div className='jobs'>
          {appliedJobs.length === 0 ? (
          <div className='noAppliedJobs'>
            <h1 className='noJobsInAppliedJobs'>You have not applied for any jobs.</h1>
            </div>
        ) : (
          appliedJobs.map(
            (j) => (
                <Job job={j} key={j.id} onRemove={onRemove} applied={1}/>
            )
        )
        )}
      </div>
    </div>
  )
}

export default AppliedJobs