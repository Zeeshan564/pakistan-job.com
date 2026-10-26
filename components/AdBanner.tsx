
import React from 'react';

interface AdBannerProps {
  label?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ label = 'ADVERTISEMENT' }) => {
  return (
    <div className="w-full bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center py-10 my-6 relative overflow-hidden">
      <div className="absolute top-1 left-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">{label}</div>
      <div className="text-gray-300 font-bold text-2xl tracking-tighter opacity-50">
        GOOGLE ADSENSE SLOT
      </div>
    </div>
  );
};

export default AdBanner;
