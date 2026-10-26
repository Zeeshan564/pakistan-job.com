
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Job } from '../types';
import { MOCK_JOBS } from '../constants';
import AdBanner from '../components/AdBanner';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const foundJob = MOCK_JOBS.find(j => j.id === id);
    if (foundJob) setJob(foundJob);
    window.scrollTo(0, 0);
  }, [id]);

  if (!job) return <div className="p-20 text-center font-bold text-2xl">Job Not Found</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <span>/</span>
        <Link to="/jobs" className="hover:text-emerald-700">Latest Jobs</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium truncate">{job.title}</span>
      </nav>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-emerald-800 p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{job.title}</h1>
              <p className="text-xl text-emerald-100 font-semibold">{job.organization}</p>
            </div>
            <div className="bg-emerald-700 p-4 rounded-2xl border border-emerald-600 flex flex-col items-center">
              <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">Last Date to Apply</span>
              <span className="text-2xl font-black">{job.lastDate}</span>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="text-gray-400 text-xs font-bold uppercase mb-2">Location</h4>
              <p className="font-bold text-gray-900">{job.location}, {job.province}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="text-gray-400 text-xs font-bold uppercase mb-2">Education</h4>
              <p className="font-bold text-gray-900">{job.education}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="text-gray-400 text-xs font-bold uppercase mb-2">Age Limit</h4>
              <p className="font-bold text-gray-900">{job.ageLimit}</p>
            </div>
          </div>

          <div className="prose prose-emerald max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {job.description}
              We are inviting applications from suitable and dynamic candidates who are permanent residents of {job.province}. 
              The hiring process will be strictly on merit basis. Candidates must ensure they meet the minimum criteria 
              specified for the post of {job.title} before submitting their applications.
            </p>

            <AdBanner label="IN-CONTENT AD" />

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to Apply</h2>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-12">
              <p className="text-emerald-900 font-medium text-lg leading-relaxed">
                {job.howToApply}
                Interested candidates should visit the official portal of {job.organization}. 
                Ensure all documents including CNIC, Domicile, and Educational certificates are ready. 
                Applications received after the deadline ({job.lastDate}) will not be entertained.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-grow bg-emerald-700 hover:bg-emerald-800 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-lg transition-all transform hover:-translate-y-1">
                Apply Now &rarr;
              </button>
              <button className="bg-white border-2 border-emerald-700 text-emerald-700 font-bold py-5 px-10 rounded-2xl text-lg hover:bg-emerald-50 transition-all">
                Download Advertisement
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <AdBanner label="FOOTER AD" />
      </div>

      <div className="mt-12 bg-gray-100 p-8 rounded-3xl text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Miss Any Updates!</h3>
        <p className="text-gray-600 mb-6">Join our WhatsApp alerts for latest {job.province} jobs and never miss a deadline again.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-xl transition-all shadow-xl">
          Get WhatsApp Job Alerts
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
