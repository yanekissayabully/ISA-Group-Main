'use client';

import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const [inView, setInView] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);

  const cases = [
    {
      client: 'Ресторан "Dastarkhan"',
      campaign: 'Запуск нового меню',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      results: {
        increase: '+65%',
        metric: 'посещаемости',
        period: '2 недели',
        screens: 4,
      },
      description: 'Яркая реклама нового меню на 4 экранах в центре города привела к значительному росту посещаемости ресторана.',
      tags: ['Ресторан', 'HoReCa', 'Продвижение меню'],
    },
    {
      client: 'Автосалон "Premium Motors"',
      campaign: 'Презентация новых моделей',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      results: {
        increase: '+40%',
        metric: 'обращений',
        period: '1 месяц',
        screens: 6,
      },
      description: 'Динамичная реклама премиальных автомобилей с видео-контентом показала отличные результаты по привлечению клиентов.',
      tags: ['Автомобили', 'Премиум', 'Видео-реклама'],
    },
    {
      client: 'Образовательный центр "Smart"',
      campaign: 'Набор на IT-курсы',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      results: {
        increase: '+120%',
        metric: 'записей',
        period: '3 недели',
        screens: 3,
      },
      description: 'Таргетированная реклама в студенческих районах привела к удвоению количества записей на курсы программирования.',
      tags: ['Образование', 'IT-курсы', 'Молодежь'],
    },
  ];

  // Intersection Observer для анимаций
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

  // Автопрокрутка
  useEffect(() => {
    const timer = setInterval(() => {
      nextCase();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeCase]);

  // Навигация
  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  // Свайп для мобильных
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextCase();
    }

    if (touchStart - touchEnd < -50) {
      prevCase();
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-slate-800 relative overflow-hidden mx-4 rounded-3xl mt-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00D4FF 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #FF0080 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Успешные{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              кейсы
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Реальные результаты наших клиентов после размещения рекламы на LED-экранах
          </p>
        </div>

        {/* Галерея кейсов */}
        <div className="relative mb-12">
          {/* Навигационные кнопки для десктопа */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 justify-between">
            <button
              onClick={prevCase}
              className="p-2 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-white hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextCase}
              className="p-2 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-white hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Контейнер кейсов */}
          <div
            ref={casesRef}
            className={`relative bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 transition-all duration-500 ${
              inView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Изображение */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img
                  src={cases[activeCase].image}
                  alt={cases[activeCase].client}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
                
                {/* Номер кейса */}
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Кейс #{activeCase + 1}
                  </span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {cases[activeCase].client}
                </h3>
                <h4 className="text-xl text-purple-400 mb-6">
                  {cases[activeCase].campaign}
                </h4>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {cases[activeCase].description}
                </p>

                {/* Теги */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cases[activeCase].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-700 text-gray-300 px-3 py-1 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Результаты */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-slate-800 rounded-xl">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                      {cases[activeCase].results.increase}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {cases[activeCase].results.metric}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-slate-800 rounded-xl">
                    <div className="text-3xl font-bold text-white mb-2">
                      {cases[activeCase].results.period}
                    </div>
                    <div className="text-gray-400 text-sm">
                      период кампании
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Индикаторы для мобильных */}
          <div className="flex md:hidden justify-center space-x-2 mt-6">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeCase
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                onClick={() => setActiveCase(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Быстрая статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: TrendingUp,
              title: 'Средний рост продаж',
              value: '+58%',
              description: 'после размещения рекламы на LED-экранах',
            },
            {
              icon: Users,
              title: 'Охват аудитории',
              value: '2М+',
              description: 'человек видят рекламу ежемесячно',
            },
            {
              icon: Calendar,
              title: 'Средняя длительность',
              value: '3 недели',
              description: 'для достижения заметных результатов',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 ${
                inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-4 inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {stat.title}
              </h4>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA секция */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Готовы увеличить продажи?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к успешным компаниям, которые уже используют силу LED-рекламы
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Обсудить проект
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;