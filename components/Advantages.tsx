'use client';

import { useState, useEffect, useRef } from 'react';
import { Eye, Zap, Users, MousePointer } from 'lucide-react';

const Advantages = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: Eye,
      title: 'Заметно днём и ночью',
      description: 'Высокая яркость LED-экранов обеспечивает отличную видимость в любое время суток',
      gradient: 'from-cyan-500 to-blue-600',
      delay: 0,
    },
    {
      icon: Zap,
      title: 'Гибкий контент',
      description: 'Мгновенное изменение рекламного контента без дополнительных затрат на печать',
      gradient: 'from-pink-500 to-purple-600',
      delay: 200,
    },
    {
      icon: Users,
      title: 'Огромный охват',
      description: 'Тысячи потенциальных клиентов видят вашу рекламу каждый день в центре города',
      gradient: 'from-lime-500 to-green-600',
      delay: 400,
    },
    {
      icon: MousePointer,
      title: 'Меняем рекламу за 1 клик',
      description: 'Удаленное управление контентом через нашу платформу 24/7',
      gradient: 'from-orange-500 to-red-600',
      delay: 600,
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-white relative overflow-hidden mx-4 rounded-3xl mt-4">
      {/* Background Pattern - более мягкий и светлый */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #e0e0e0 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #e0e0e0 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              LED-рекламу
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные цифровые экраны - это будущее наружной рекламы
          </p>
        </div>

        {/* Двухрядное расположение карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Первый ряд */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.slice(0, 2).map((advantage, index) => (
              <div
                key={index}
                className={`group relative bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg ${
                  inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${advantage.delay}ms` }}
              >
                {/* Glow Effect - более мягкий */}
                <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex p-4 rounded-xl bg-gradient-to-r ${advantage.gradient} shadow-md`}>
                  <advantage.icon className="h-8 w-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${advantage.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>

          {/* Второй ряд */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.slice(2, 4).map((advantage, index) => (
              <div
                key={index + 2}
                className={`group relative bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg ${
                  inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${advantage.delay}ms` }}
              >
                {/* Glow Effect - более мягкий */}
                <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex p-4 rounded-xl bg-gradient-to-r ${advantage.gradient} shadow-md`}>
                  <advantage.icon className="h-8 w-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${advantage.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;