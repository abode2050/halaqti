import React from 'react';
import { SCREENSHOTS } from '../constants';

const Screenshots: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="screenshots" className="py-24 bg-brand-cream dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-bold text-lg mb-2">جولة في التطبيق</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-text dark:text-white">
            واجهة عصرية وسهلة الاستخدام
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {SCREENSHOTS.map((shot, index) => (
            <div 
              key={shot.id} 
              className={`relative group w-64 rounded-[2rem] border-8 border-white dark:border-gray-800 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${index === 1 ? 'md:-mt-12 z-10' : 'z-0'}`}
            >
              <img 
                src={shot.src} 
                alt={shot.alt} 
                className="w-full h-auto aspect-[9/18] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center font-bold">{shot.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#download" 
            onClick={(e) => handleScroll(e, '#download')}
            className="inline-flex items-center justify-center bg-white dark:bg-gray-800 text-brand-green dark:text-brand-light border-2 border-brand-green/20 dark:border-brand-green/40 hover:border-brand-green px-8 py-3 rounded-full font-bold transition-all cursor-pointer"
          >
            مشاهدة المزيد بعد التحميل
          </a>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;