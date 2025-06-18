'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Monitor, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScreensList = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [inView, setInView] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const screens = [
    {
      id: 1,
      name: 'Улица Алматинская',
      location: 'г.Есик, ул.Алматинская',
      image: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      size: '6×3 м',
      views: 'Охват: по ул.Алматинская в северном направлении',
      price: 'от 100 000 ₸',
      features: ['10 секунд', '18кв.м площадь монитора', 'Круглосуточно'],
    },
    {
      id: 2,
      name: 'Улица Абая',
      location: 'г.Есик, ул.Абая',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      size: '6×3 м',
      views: 'Охват: по ул.Абая',
      price: 'от 100 000 ₸',
      features: ['10 секунд', '18кв.м площадь монитора', 'Круглосуточно'],
    },
    {
      id: 3,
      name: 'Улица Алтын Адам',
      location: 'г.Есик, ул.Алтын Адам',
      image: 'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      size: '6×3 м',
      views: 'Охват: потоки по ул.Алтын Адам в восточном направлении',
      price: 'от 100 000 ₸',
      features: ['10 секунд', '18кв.м площадь монитора', 'Круглосуточно'],
    },
    {
      id: 4,
      name: 'Автостанция',
      location: 'г.Каскелен, Автостанция',
      image: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      size: '6×3 м',
      views: 'Охват: потоки по ул.Аблайхана в западном направлении',
      price: 'от 100 000 ₸',
      features: ['10 секунд', '18кв.м площадь монитора', 'Круглосуточно'],
    },
    {
      id: 5,
      name: 'Тц.Алатау',
      location: 'г.Каскелен, Тц.Алатау',
      image: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      size: '6×3 м',
      views: 'Охват: потоки по ул.Аблайхана в западном направлении',
      price: 'от 100 000 ₸',
      features: ['10 секунд', '18кв.м площадь монитора', 'Круглосуточно'],
    },
    {
      id: 6,
      name: 'Талгар',
      location: 'г.Талгар',
      image: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      size: '3×5 м',
      views: 'Охват: потоки по ул.Аблайхана в западном направлении',
      price: 'от 100 000 ₸',
      features: ['10 секунд', '15кв.м площадь монитора', 'Круглосуточно'],
    },
  ];

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

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextScreen();
    }

    if (touchStart - touchEnd < -50) {
      prevScreen();
    }
  };

  return (
    <section id="screens" className="py-20 bg-white relative overflow-hidden mx-4 rounded-3xl mt-4">
      {/* Background Pattern - более светлый */}
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
            Наши{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              LED-экраны
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Стратегически расположенные экраны в самых проходимых местах Алматы
          </p>
        </div>

        {/* Screen Carousel */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 justify-between">
            <button
              onClick={prevScreen}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:text-purple-600 hover:border-purple-400 shadow-md transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextScreen}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:text-purple-600 hover:border-purple-400 shadow-md transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Screen Card */}
          <div
            className={`bg-white backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 shadow-lg transition-all duration-500 ${
              inView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image - улучшенное оформление */}
              <div className="relative h-80 lg:h-[500px] overflow-hidden group">
                <img
                  src={screens[activeScreen].image}
                  alt={screens[activeScreen].name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
                
                {/* Screen Number */}
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                    Экран #{screens[activeScreen].id}
                  </span>
                </div>
                
                {/* Views */}
                <div className="absolute bottom-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-purple-600 text-sm font-medium shadow-sm">
                    {screens[activeScreen].views} 
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {screens[activeScreen].name}
                </h3>
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2 text-purple-500" />
                  {screens[activeScreen].location}
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Премиальное расположение с высоким трафиком и отличной видимостью
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {screens[activeScreen].features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-200 transition-colors duration-200">
                    <div className="flex items-center justify-center text-gray-600 mb-2">
                      <Monitor className="h-5 w-5 mr-2 text-purple-500" />
                      Размер
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {screens[activeScreen].size}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-200 transition-colors duration-200">
                    <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                      {screens[activeScreen].price}
                    </div>
                    <div className="text-gray-500 text-sm">
                      за месяц размещения
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators for Mobile */}
          <div className="flex md:hidden justify-center space-x-2 mt-6">
            {screens.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeScreen
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-md'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveScreen(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
            onClick={() => document.getElementById('contact-form-simple')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Выбрать экран для рекламы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScreensList;