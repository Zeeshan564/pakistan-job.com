
import React from 'react';
import { Link } from 'react-router-dom';
import { Job, JobType } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const getTypeBadgeColor = (type: JobType) => {
    switch (type) {
      case JobType.GOVERNMENT: return 'bg-emerald-100 text-emerald-800';
      case JobType.PRIVATE: return 'bg-blue-100 text-blue-800';
      case JobType.INTERNSHIP: return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all hover:border-emerald-200 group">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeBadgeColor(job.type)}`}>
          {job.type}
        </span>
        <span className="text-gray-400 text-xs font-medium">Posted: {job.postedDate}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
        {job.title}
      </h3>
      <p className="text-emerald-600 font-semibold text-sm mb-4">{job.organization}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="flex items-center text-gray-500 text-xs">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {job.location}
        </div>
        <div className="flex items-center text-gray-500 text-xs">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Deadline: {job.lastDate}
        </div>
      </div>
      
      <Link 
        to={`/job/${job.id}`}
        className="block w-full text-center bg-gray-50 text-emerald-800 font-bold py-2 rounded-lg group-hover:bg-emerald-700 group-hover:text-white transition-all"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
