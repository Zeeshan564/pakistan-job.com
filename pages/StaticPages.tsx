
import React from 'react';

interface StaticPageProps {
  title: string;
  content: React.ReactNode;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, content }) => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-emerald-600 inline-block">{title}</h1>
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 prose prose-emerald max-w-none">
      {content}
    </div>
  </div>
);

export const AboutUs = () => (
  <StaticPage 
    title="About Us"
    content={
      <>
        <p>Pak Job Alerts is Pakistan's leading career resource hub. Our mission is to bridge the gap between talented individuals and career opportunities across the country.</p>
        <p>Founded in 2024, we focus on providing verified and authentic job advertisements from all major newspapers (Jang, Dawn, Express, Nawaiwaqt) and official government gazettes.</p>
        <h3>Our Core Values</h3>
        <ul>
          <li><strong>Authenticity:</strong> We verify every job post before publishing.</li>
          <li><strong>Timeliness:</strong> We update our platform daily to ensure you never miss a deadline.</li>
          <li><strong>Accessibility:</strong> Our platform is designed to work seamlessly on all mobile devices.</li>
        </ul>
      </>
    }
  />
);

export const ContactUs = () => (
  <StaticPage 
    title="Contact Us"
    content={
      <>
        <p>Have questions or suggestions? We'd love to hear from you!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-8">
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
            <p className="text-emerald-700">info@pakjobalerts.pk</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-2">WhatsApp Support</h4>
            <p className="text-emerald-700">+92 300 0000000</p>
          </div>
        </div>
        <form className="mt-12 space-y-4 not-prose">
          <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-200 rounded-xl" />
          <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-200 rounded-xl" />
          <textarea placeholder="Your Message" className="w-full p-4 border border-gray-200 rounded-xl h-40"></textarea>
          <button className="bg-emerald-700 text-white font-bold py-4 px-12 rounded-xl">Send Message</button>
        </form>
      </>
    }
  />
);

export const PrivacyPolicy = () => (
  <StaticPage 
    title="Privacy Policy"
    content={
      <>
        <p>Your privacy is important to us. This policy explains how Pak Job Alerts collects, uses, and protects your information.</p>
        <h3>Information We Collect</h3>
        <p>We collect information when you subscribe to our newsletter, such as your email address. We also use cookies to improve user experience and analyze site traffic.</p>
        <h3>Google AdSense</h3>
        <p>Our website uses Google AdSense to serve advertisements. Google may use DART cookies to serve ads based on your visits to this and other websites.</p>
        <h3>Data Security</h3>
        <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
      </>
    }
  />
);
