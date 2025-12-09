import React from 'react';
import { BookOpen, MessageCircle, Send, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-text dark:bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-green p-2 rounded-lg">
                <BookOpen size={24} />
              </div>
              <span className="text-2xl font-bold">نظام حلقتي</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              وقف خيري لخدمة القرآن الكريم. يساعد المعلمين على إدارة حلقاتهم بكفاءة واحترافية.
            </p>
             <div className="flex flex-wrap gap-3">
                <a 
                  href="https://chat.whatsapp.com/H6cCssqCUsIIbWjICk6YDK?mode=wwt" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-green-600/20 text-green-400 px-3 py-1.5 rounded-full hover:bg-green-600/30 transition border border-green-600/30"
                >
                  <MessageCircle size={16} /> مجتمع واتساب
                </a>
                <a 
                  href="https://t.me/nur_alquran_q" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-blue-500/20 text-blue-400 px-3 py-1.5 rounded-full hover:bg-blue-500/30 transition border border-blue-500/30"
                >
                  <Send size={16} /> مجتمع تيليجرام
                </a>
                <a 
                  href="https://wa.me/967779516077" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-white/10 text-white px-3 py-1.5 rounded-full hover:bg-white/20 transition border border-white/20"
                >
                  <Phone size={16} /> تواصل مع المطور
                </a>
             </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-6 text-gray-400">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-brand-green transition-colors cursor-pointer">الرئيسية</a>
            <a href="#features" onClick={(e) => handleScroll(e, '#features')} className="hover:text-brand-green transition-colors cursor-pointer">الميزات</a>
            <a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="hover:text-brand-green transition-colors cursor-pointer">الأسئلة الشائعة</a>
            <a href="#download" onClick={(e) => handleScroll(e, '#download')} className="hover:text-brand-green transition-colors cursor-pointer">التحميل</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center md:text-right text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <p>© {new Date().getFullYear()} نظام حلقتي. جميع الحقوق محفوظة.</p>
             <div className="text-center md:text-left">
                <p>
                  المطور: {" "}
                  <a 
                    href="https://www.facebook.com/bdallhmbarkalmkhlafy.2025?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-green transition-colors underline decoration-brand-green/30 hover:decoration-brand-green"
                  >
                    عبدالله مبارك عبد السلام المخلافي
                  </a>
                </p>
                <p className="text-xs mt-1 text-gray-600">اليمن - تعز</p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;