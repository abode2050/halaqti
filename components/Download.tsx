import React, { useState } from 'react';
import { Download, Youtube, Loader2 } from 'lucide-react';

const DownloadSection: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [message, setMessage] = useState('');

  const handleDownload = () => {
    setMessage('يرجى الانتظار قليلاً ليبدأ التحميل...');
    setDownloading(true);
    
    // Simulate download delay then redirect
    setTimeout(() => {
      setMessage('');
      setDownloading(false);
      // Redirect to Google as requested
      window.location.href = 'https://download1077.mediafire.com/g0hgby5ejepgi2v2FekYgrXKrjy5cPe8OO1zGG9S07arSrT9Vcz8D-IKkKDqMcoJEekeY5FziC5zO4YiuFT2KGVpZ1qYHjVYCLX8gi7M4Iye0iUY3Fj0dxMfm6yveHbkqDzWp9viEnMrIcwrYLKw66Aux58szM1HEmO8D9eKmx5QiXs/dwmlsp800wj24yq/%D9%86%D8%B8%D8%A7%D9%85+%D8%AD%D9%84%D9%82%D8%AA%D9%8A.apk';
    }, 2000);
  };

  return (
    <section id="download" className="py-20 bg-brand-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">ابدأ رحلة التنظيم الآن</h2>
        
        {/* YouTube Section replaced the 10k text */}
        <div className="flex flex-col items-center justify-center mb-10 max-w-2xl mx-auto">
          <a 
            href="https://www.youtube.com" // Replace with actual video link if available
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-4 rounded-2xl transition-all cursor-pointer"
          >
            <div className="bg-red-600 text-white p-2 rounded-full group-hover:scale-110 transition-transform">
              <Youtube size={24} fill="currentColor" />
            </div>
            <p className="text-lg md:text-xl text-brand-light font-medium">
              شاهد فيديو كامل على يوتيوب يشرح طريقة استخدام التطبيق من الصفر
            </p>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <button 
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center justify-center gap-3 bg-white text-brand-dark px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1 w-full sm:w-auto disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer"
          >
            {downloading ? (
              <Loader2 size={28} className="animate-spin text-brand-green" />
            ) : (
              <Download size={28} />
            )}
            <div className="text-right">
              <span className="block text-sm text-gray-500">تحميل مباشر</span>
              <span>ملف APK</span>
            </div>
          </button>
        </div>

        {/* Message Toast */}
        {message && (
          <div className="mt-6 animate-fade-in-down">
            <span className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium border border-white/20">
              {message}
            </span>
          </div>
        )}

        <div className="mt-8 text-sm text-brand-light/80">
          * متوافق مع أندرويد 6.0 وما فوق. وبإذن الله نوفر له نسخه للأيفون إن أردتم.
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;