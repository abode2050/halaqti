import React from 'react';
import { Download, ChevronDown, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-light/30 dark:from-gray-900 dark:via-brand-dark-bg dark:to-gray-800 transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/10 dark:bg-brand-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-right space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-light dark:bg-brand-green/20 text-brand-dark dark:text-brand-light px-4 py-1.5 rounded-full text-sm font-bold border border-brand-green/20 dark:border-brand-green/30 mb-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
            </span>
            هذا التحديث الأول
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text dark:text-white leading-tight">
            نظام حلقتي <br />
            <span className="text-brand-green">إدارة احترافية</span> لحلقات التحفيظ
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
            أدِر حلقتك بكل سهولة: جلسات، تقارير، بطاقات طلاب، وإشعارات. تطبيق يوفّر وقت المعلم ويجعل المتابعة دقيقة لكل طالب.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#download" 
              onClick={(e) => handleScroll(e, '#download')}
              className="flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all shadow-lg hover:shadow-brand-green/30 transform hover:-translate-y-1 cursor-pointer"
            >
              <Download size={20} />
              تحميل الآن
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleScroll(e, '#faq')}
              className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-brand-text dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:border-brand-green/50 cursor-pointer"
            >
              اعرف المزيد
            </a>
          </div>
          
          <div className="pt-4 flex items-center justify-center md:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
               <CheckCircle2 size={16} className="text-brand-green" />
               <span>يعمل بدون إنترنت</span>
            </div>
             <div className="flex items-center gap-1">
               <CheckCircle2 size={16} className="text-brand-green" />
               <span>مجاني بالكامل</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="relative flex justify-center items-center">
          <div className="relative z-10 w-64 md:w-80 animate-float">
            {/* Phone Frame */}
            <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-xl z-20"></div>
              {/* Screen Content - Dark Theme as requested */}
              <div className="overflow-hidden rounded-[2.5rem] bg-[#1a202c] text-white aspect-[9/19] relative flex flex-col">
                 
                 {/* Mockup Header */}
                 <div className="h-24 bg-brand-dark p-6 pt-10 flex justify-between items-center shadow-lg z-10">
                    <div className="font-bold">حلقة أبي بن كعب</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                 </div>

                 {/* Mockup Body */}
                 <div className="flex-1 p-4 space-y-4 overflow-hidden">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-800 p-3 rounded-xl border border-gray-700">
                           <div className="text-xs text-gray-400">الحضور اليوم</div>
                           <div className="text-xl font-bold text-brand-green">95%</div>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-xl border border-gray-700">
                           <div className="text-xs text-gray-400">عدد الطلاب</div>
                           <div className="text-xl font-bold text-brand-gold">18</div>
                        </div>
                    </div>

                    {/* Student List Mockup */}
                    <div className="space-y-3 mt-4">
                       <div className="text-xs text-gray-500 font-bold mb-2">قائمة الطلاب</div>
                       {[1, 2, 3, 4].map((i) => (
                           <div key={i} className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl border border-gray-700/50">
                              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                                {i === 1 ? 'م' : i === 2 ? 'أ' : 'ع'}
                              </div>
                              <div className="flex-1">
                                 <div className="h-2 w-24 bg-gray-600 rounded mb-1.5"></div>
                                 <div className="h-1.5 w-16 bg-gray-700 rounded"></div>
                              </div>
                              <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                           </div>
                       ))}
                    </div>
                 </div>

                 {/* Floating Action Button Mockup */}
                 <div className="absolute bottom-6 left-6 w-12 h-12 bg-brand-green rounded-full shadow-lg flex items-center justify-center text-2xl pb-1">
                    +
                 </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="absolute z-0 w-[120%] h-[120%] bg-white/40 dark:bg-white/5 rounded-full border border-white/60 dark:border-white/10 blur-sm"></div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a 
          href="#features" 
          onClick={(e) => handleScroll(e, '#features')}
          className="text-gray-400 dark:text-gray-500 hover:text-brand-green transition-colors cursor-pointer"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;