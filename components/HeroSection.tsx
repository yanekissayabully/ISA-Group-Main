'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const slide = {
    image: 'https://i.pinimg.com/736x/c2/3d/bb/c23dbb2def4938ab04cf19caca9f1498.jpg',
    title: 'ISAGroup — продажа и установка светодиодных экранов в Казахстане',
    subtitle: 'Максимальный охват аудитории 24/7'
  };

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-2rem)] mt-4 mx-4 rounded-3xl overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt="LED Screen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Text Content - Left Side */}
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-left">
              <span className="inline-block animate-fade-in">
                {slide.title.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className="inline-block mr-2"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      background: index === 0 ? 'linear-gradient(45deg, #8B5CF6, #EC4899)' : 'transparent',
                      WebkitBackgroundClip: index === 0 ? 'text' : 'initial',
                      WebkitTextFillColor: index === 0 ? 'transparent' : 'white',
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 animate-fade-in-delay text-left">
              {slide.subtitle}
            </p>
          </div>

          {/* Button - Right Side */}
          <div className="animate-fade-in-delay">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
              onClick={() => document.getElementById('contact-form-simple')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-purple-400" />
      </div>

      {/* Floating Elements - Updated to purple/pink */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-pink-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;