import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-brand-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-bold text-lg mb-2">مميزات النظام</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-text dark:text-white mb-4">
            كل ما تحتاجه لإدارة حلقتك بامتياز
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            صمم خصيصاً ليراعي احتياجات معلمي القرآن الكريم، مع التركيز على البساطة والسرعة في الأداء.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className="group bg-brand-cream/30 dark:bg-brand-dark-card p-8 rounded-2xl border border-transparent dark:border-gray-800 hover:border-brand-green/20 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-green/10 dark:bg-brand-green/20 text-brand-green rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-text dark:text-white mb-3">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;