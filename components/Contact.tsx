import React, { useState } from 'react';
import { Mail, Send, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-cream dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-brand-dark-card rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-brand-dark text-white p-10 md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">اتصل بنا</h3>
              <p className="text-brand-light mb-8 leading-relaxed">
                هل لديك استفسار أو اقتراح؟ نسعد بتواصلك معنا. فريق الدعم جاهز للرد على استفساراتكم.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Mail size={20} />
                </div>
                <span>nova.kayanco@gmail.com</span>
              </div>
              
              <a 
                href="https://wa.me/+967779516077"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:text-brand-green transition-colors bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10"
              >
                <div className="bg-green-500 p-2 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-xs text-brand-light">تواصل مباشرة</span>
                  <span className="font-bold">واتساب المطور</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-3/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-bold text-brand-dark dark:text-white mb-2">تم الإرسال بنجاح!</h4>
                <p className="text-gray-500 dark:text-gray-400">شكراً لتواصلك معنا، سنرد عليك في أقرب وقت.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-green font-bold hover:underline"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">الاسم</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                    placeholder="أدخل اسمك الكريم"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">الرسالة</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none"
                    placeholder="كيف يمكننا مساعدتك؟"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  إرسال الرسالة
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;