// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { Eye, Zap, Users, MousePointer } from 'lucide-react';

// const Advantages = () => {
//   const [inView, setInView] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setInView(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const advantages = [
//     {
//       icon: Eye,
//       title: 'Заметно днём и ночью',
//       description: 'Высокая яркость LED-экранов обеспечивает отличную видимость в любое время суток',
//       gradient: 'from-cyan-500 to-blue-600',
//       delay: 0,
//     },
//     {
//       icon: Zap,
//       title: 'Гибкий контент',
//       description: 'Мгновенное изменение рекламного контента без дополнительных затрат на печать',
//       gradient: 'from-pink-500 to-purple-600',
//       delay: 200,
//     },
//     {
//       icon: Users,
//       title: 'Огромный охват',
//       description: 'Тысячи потенциальных клиентов видят вашу рекламу каждый день в центре города',
//       gradient: 'from-lime-500 to-green-600',
//       delay: 400,
//     },
//     {
//       icon: MousePointer,
//       title: 'Меняем рекламу за 1 клик',
//       description: 'Удаленное управление контентом через нашу платформу 24/7',
//       gradient: 'from-orange-500 to-red-600',
//       delay: 600,
//     },
//   ];

//   return (
//     <section id="advantages" className="py-20 bg-white relative overflow-hidden mx-4 rounded-3xl mt-4">
//       {/* Background Pattern - более мягкий и светлый */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 25% 25%, #e0e0e0 1px, transparent 1px),
//                            radial-gradient(circle at 75% 75%, #e0e0e0 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={sectionRef}>
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//             Почему выбирают{' '}
//             <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//               LED-рекламу
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Современные цифровые экраны - это будущее наружной рекламы
//           </p>
//         </div>

//         {/* Двухрядное расположение карточек */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Первый ряд */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {advantages.slice(0, 2).map((advantage, index) => (
//               <div
//                 key={index}
//                 className={`group relative bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg ${
//                   inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
//                 }`}
//                 style={{ animationDelay: `${advantage.delay}ms` }}
//               >
//                 {/* Glow Effect - более мягкий */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
//                 {/* Icon */}
//                 <div className={`relative mb-6 inline-flex p-4 rounded-xl bg-gradient-to-r ${advantage.gradient} shadow-md`}>
//                   <advantage.icon className="h-8 w-8 text-white" />
//                   <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
//                   {advantage.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//                   {advantage.description}
//                 </p>

//                 {/* Bottom Accent Line */}
//                 <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${advantage.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
//               </div>
//             ))}
//           </div>

//           {/* Второй ряд */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {advantages.slice(2, 4).map((advantage, index) => (
//               <div
//                 key={index + 2}
//                 className={`group relative bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg ${
//                   inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
//                 }`}
//                 style={{ animationDelay: `${advantage.delay}ms` }}
//               >
//                 {/* Glow Effect - более мягкий */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
//                 {/* Icon */}
//                 <div className={`relative mb-6 inline-flex p-4 rounded-xl bg-gradient-to-r ${advantage.gradient} shadow-md`}>
//                   <advantage.icon className="h-8 w-8 text-white" />
//                   <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
//                   {advantage.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//                   {advantage.description}
//                 </p>

//                 {/* Bottom Accent Line */}
//                 <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${advantage.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Advantages;




'use client';

import { useState, useEffect, useRef } from 'react';
import { Eye, Zap, Users, MousePointer, Info } from 'lucide-react';

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
    <section id="advantages" className="py-12 sm:py-20 bg-white relative overflow-hidden mx-2 sm:mx-4 rounded-2xl sm:rounded-3xl mt-2 sm:mt-4">
      {/* Background Pattern - более мягкий и светлый */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #e0e0e0 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #e0e0e0 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-6">
            Почему выбирают{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              LED-рекламу
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Современные цифровые экраны - это будущее наружной рекламы
          </p>
        </div>

        {/* Двухрядное расположение карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* Первый ряд */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {advantages.slice(0, 2).map((advantage, index) => (
              <div
                key={index}
                className={`group relative bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg ${
                  inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${advantage.delay}ms` }}
              >
                {/* Glow Effect - более мягкий */}
                <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${advantage.gradient} shadow-md`}>
                  <advantage.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} rounded-lg sm:rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${advantage.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-xl sm:rounded-b-2xl`}></div>
              </div>
            ))}
          </div>

          {/* Второй ряд */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {advantages.slice(2, 4).map((advantage, index) => (
              <div
                key={index + 2}
                className={`group relative bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg ${
                  inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${advantage.delay}ms` }}
              >
                {/* Glow Effect - более мягкий */}
                <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${advantage.gradient} shadow-md`}>
                  <advantage.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${advantage.gradient} rounded-lg sm:rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${advantage.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-xl sm:rounded-b-2xl`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Информационное уведомление */}
        <div 
          className={`mt-10 sm:mt-16 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl sm:rounded-r-2xl p-4 sm:p-6 ${
            inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '800ms' }}
        >
          <div className="flex gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <Info className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
            </div>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                Уведомляем, что в связи с внутренним решением руководства не все виды рекламы могут быть размещены на наших площадках. 
                В частности, ограничения распространяются на рекламу банков второго уровня (БВУ), микрокредитных организаций (МКО), 
                ломбардов, а также концертов и мероприятий, проводимых в казино.
              </p>
              <p className="text-sm sm:text-base text-amber-700 font-medium">
                Просим заранее согласовывать с нами рекламные материалы перед размещением.
              </p>
              <p className="text-xs sm:text-sm text-amber-600 pt-1 sm:pt-2 border-t border-amber-200">
                Благодарим за понимание и надеемся на взаимовыгодное сотрудничество!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;