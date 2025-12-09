import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-brand-dark-bg relative transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-brand-light dark:bg-brand-green/20 rounded-full text-brand-green mb-4">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text dark:text-white mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            إجابات على أكثر الاستفسارات شيوعاً حول نظام حلقتي
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-green/50 bg-brand-green/5 dark:bg-brand-green/10 shadow-md' : 'border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-right focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-dark dark:text-brand-light' : 'text-gray-700 dark:text-gray-300'}`}>
                  {faq.question}
                </span>
                <span className={`text-brand-green transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown />
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-brand-green/10 dark:border-brand-green/20 mx-6 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;