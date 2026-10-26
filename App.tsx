
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import JobDetail from './pages/JobDetail';
import { AboutUs, ContactUs, PrivacyPolicy } from './pages/StaticPages';
import { MOCK_JOBS } from './constants';
import JobCard from './components/JobCard';
import { JobType } from './types';

// Generic page for filtered lists
const JobListPage: React.FC<{ title: string; filterType?: JobType }> = ({ title, filterType }) => {
  const jobs = filterType ? MOCK_JOBS.filter(j => j.type === filterType) : MOCK_JOBS;
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-10">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/jobs" element={<JobListPage title="Latest Job Alerts" />} />
          <Route path="/government" element={<JobListPage title="Government Jobs Pakistan" filterType={JobType.GOVERNMENT} />} />
          <Route path="/private" element={<JobListPage title="Private Sector Jobs" filterType={JobType.PRIVATE} />} />
          <Route path="/internships" element={<JobListPage title="Internships for Students" filterType={JobType.INTERNSHIP} />} />
          <Route path="/results" element={<JobListPage title="Latest Exam Results" />} />
          <Route path="/admit-cards" element={<JobListPage title="Download Roll No Slips" />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
