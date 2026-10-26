
import React, { useState } from 'react';
import { MOCK_JOBS, PROVINCES, CATEGORIES } from '../constants';
import JobCard from '../components/JobCard';
import AdBanner from '../components/AdBanner';
import { getCareerAdvice } from '../services/geminiService';

const Home: React.FC = () => {
  const [adviceQuery, setAdviceQuery] = useState('');
  const [adviceResponse, setAdviceResponse] = useState('');
  const [isAdviceLoading, setIsAdviceLoading] = useState(false);

  const handleAdviceRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adviceQuery.trim()) return;
    setIsAdviceLoading(true);
    const response = await getCareerAdvice(adviceQuery);
    setAdviceResponse(response || '');
    setIsAdviceLoading(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Find Your Dream Job in Pakistan
          </h1>
          <p className="text-emerald-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Latest government, banking, teaching, and private jobs updated daily. Subscribe for instant WhatsApp alerts.
          </p>
          
          <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
            <input 
              type="text" 
              placeholder="Job title, skills or keyword..."
              className="flex-grow px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <select className="px-6 py-4 rounded-xl text-gray-600 border-r md:border-r-0 border-gray-100 focus:outline-none">
              <option>All Pakistan</option>
              {PROVINCES.map(p => <option key={p}>{p}</option>)}
            </select>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-xl transition-all">
              Search Jobs
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-emerald-700/50 px-3 py-1 rounded-full border border-emerald-500/30">Trending: PPSC Jobs</span>
            <span className="bg-emerald-700/50 px-3 py-1 rounded-full border border-emerald-500/30">FPSC Results</span>
            <span className="bg-emerald-700/50 px-3 py-1 rounded-full border border-emerald-500/30">Banks Trainee Program</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Categories */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">By Province</h3>
              <ul className="space-y-2">
                {PROVINCES.map(province => (
                  <li key={province}>
                    <a href="#" className="flex justify-between items-center text-gray-600 hover:text-emerald-700 hover:translate-x-1 transition-all">
                      <span>{province} Jobs</span>
                      <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded-full">New</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Top Categories</h3>
              <ul className="space-y-2">
                {CATEGORIES.slice(0, 8).map(cat => (
                  <li key={cat}>
                    <a href="#" className="flex justify-between items-center text-gray-600 hover:text-emerald-700 hover:translate-x-1 transition-all">
                      <span>{cat} Jobs</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <h3 className="text-lg font-bold text-emerald-800 mb-2">Email Newsletter</h3>
              <p className="text-emerald-700 text-sm mb-4">Get daily job updates in your inbox.</p>
              <input type="email" placeholder="Your email" className="w-full p-3 rounded-lg border border-emerald-200 mb-2" />
              <button className="w-full bg-emerald-700 text-white font-bold py-3 rounded-lg hover:bg-emerald-800">Subscribe</button>
            </div>
          </aside>

          {/* Middle Content - Latest Jobs */}
          <section className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-extrabold text-gray-900">Latest Job Opportunities</h2>
              <a href="#" className="text-emerald-700 font-bold text-sm hover:underline">View All &rarr;</a>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {MOCK_JOBS.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            <AdBanner label="HORIZONTAL AD" />

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Career Counselor</h3>
              <p className="text-gray-600 mb-6">Ask our Gemini-powered AI for career advice, interview tips, or job trends in Pakistan.</p>
              <form onSubmit={handleAdviceRequest} className="space-y-4">
                <textarea 
                  value={adviceQuery}
                  onChange={(e) => setAdviceQuery(e.target.value)}
                  placeholder="e.g. What are the best career paths for a fresh CS graduate in Lahore?"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 h-32 resize-none"
                />
                <button 
                  type="submit"
                  disabled={isAdviceLoading}
                  className="bg-gray-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-black transition-all disabled:bg-gray-400"
                >
                  {isAdviceLoading ? 'Thinking...' : 'Get AI Advice'}
                </button>
              </form>
              
              {adviceResponse && (
                <div className="mt-6 p-6 bg-emerald-50 border border-emerald-100 rounded-xl">
                  <h4 className="font-bold text-emerald-800 mb-2">Advice from CareerBot:</h4>
                  <p className="text-emerald-900 whitespace-pre-wrap">{adviceResponse}</p>
                </div>
              )}
            </div>
          </section>

          {/* Right Sidebar - Ad Slots & News */}
          <aside className="lg:col-span-1 space-y-8">
            <AdBanner label="SIDEBAR AD" />
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Results & Roll No</h3>
              <ul className="space-y-4">
                <li className="group cursor-pointer">
                  <p className="text-sm font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">PPSC Written Result 2024</p>
                  <p className="text-xs text-gray-500">Updated: 2 hours ago</p>
                </li>
                <li className="group cursor-pointer">
                  <p className="text-sm font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">FPSC Phase-II Roll No Slip</p>
                  <p className="text-xs text-gray-500">Updated: Today</p>
                </li>
                <li className="group cursor-pointer">
                  <p className="text-sm font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">NTS Educators Result List</p>
                  <p className="text-xs text-gray-500">Updated: Yesterday</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-emerald-950 p-6 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-2">WhatsApp Channel</h3>
              <p className="text-emerald-100 text-sm mb-6">Join 50k+ job seekers getting instant alerts on WhatsApp.</p>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-all">
                Join Now
              </button>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Home;
