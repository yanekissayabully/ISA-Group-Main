'use client';

import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const YandexMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш_api_ключ&lang=ru_RU';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      window.ymaps.ready(() => setIsLoaded(true));
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // @ts-ignore
    const map = new window.ymaps.Map('map', {
      center: [43.238949, 76.889709],
      zoom: 16,
      controls: ['zoomControl']
    });

    // Стилизация карты в фиолетово-розовых тонах
    // @ts-ignore
    map.options.set({
      suppressMapOpenBlock: true,
      // @ts-ignore
      yandexMapDisablePoiInteractivity: true
    });

    // @ts-ignore
    map.controls.add(new window.ymaps.control.ZoomControl({
      options: {
        size: 'small',
        position: { right: 10, top: 100 }
      }
    }));

    // Кастомная метка с градиентом
    // @ts-ignore
    const placemark = new window.ymaps.Placemark([43.238949, 76.889709], {
      hintContent: 'ISAGROUP',
      balloonContent: 'г. Алматы, пр. Абая, 150'
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="url(%23grad)"/><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%238B5CF6"/><stop offset="100%" stop-color="%23EC4899"/></linearGradient></defs></svg>',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40]
    });

    map.geoObjects.add(placemark);

    // Применяем цветовой фильтр к карте
    // @ts-ignore
    window.ymaps.layout.storage.add('my#purpleLayout', function() {
      // @ts-ignore
      return window.ymaps.templateLayoutFactory.createClass(
        '<div class="map-wrapper" style="filter: hue-rotate(260deg) brightness(1.1) contrast(0.9) saturate(1.3);"></div>'
      );
    });
    // @ts-ignore
    map.setLayout('my#purpleLayout');
  }, [isLoaded]);

  return (
    <div className="relative mx-4 mt-4 rounded-3xl overflow-hidden border border-purple-900/30 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group">
      {/* Заголовок в стиле HeroSection */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-blue-900/70 to-transparent p-4">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <MapPin className="h-5 w-5 text-purple-700" />
          <span>Мы находимся здесь</span>
        </h3>
      </div>

      {/* Лоадер с градиентом */}
      {!isLoaded && (
        <div className="h-[400px] flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-pink-900/30">
          <div className="animate-pulse flex space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      )}

      {/* Контейнер карты */}
      <div 
        id="map" 
        className="h-[400px] w-full"
      ></div>

      {/* Футер карты */}
      <div className="bg-gradient-to-r from-blue-900/70 to-blue-900/50 p-3 text-center border-t border-purple-800/30">
        <a 
          href="https://yandex.ru/maps/?text=г.+Алматы,+пр.+Абая,+150"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white hover:text-pink-300 flex items-center justify-center gap-1 transition-colors"
        >
          <span>Открыть в Яндекс.Картах</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default YandexMap;