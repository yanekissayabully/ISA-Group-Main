// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { TrendingUp, Users, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const CaseStudies = () => {
//   const [inView, setInView] = useState(false);
//   const [activeCase, setActiveCase] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const casesRef = useRef<HTMLDivElement>(null);

//   const cases = [
//     {
//       client: 'Ресторан "Dastarkhan"',
//       campaign: 'Запуск нового меню',
//       image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       results: {
//         increase: '+65%',
//         metric: 'посещаемости',
//         period: '2 недели',
//         screens: 4,
//       },
//       description: 'Яркая реклама нового меню на 4 экранах в центре города привела к значительному росту посещаемости ресторана.',
//       tags: ['Ресторан', 'HoReCa', 'Продвижение меню'],
//     },
//     {
//       client: 'Автосалон "Premium Motors"',
//       campaign: 'Презентация новых моделей',
//       image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       results: {
//         increase: '+40%',
//         metric: 'обращений',
//         period: '1 месяц',
//         screens: 6,
//       },
//       description: 'Динамичная реклама премиальных автомобилей с видео-контентом показала отличные результаты по привлечению клиентов.',
//       tags: ['Автомобили', 'Премиум', 'Видео-реклама'],
//     },
//     {
//       client: 'Образовательный центр "Smart"',
//       campaign: 'Набор на IT-курсы',
//       image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       results: {
//         increase: '+120%',
//         metric: 'записей',
//         period: '3 недели',
//         screens: 3,
//       },
//       description: 'Таргетированная реклама в студенческих районах привела к удвоению количества записей на курсы программирования.',
//       tags: ['Образование', 'IT-курсы', 'Молодежь'],
//     },
//   ];

//   // Intersection Observer для анимаций
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

//   // Автопрокрутка
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextCase();
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [activeCase]);

//   // Навигация
//   const nextCase = () => {
//     setActiveCase((prev) => (prev + 1) % cases.length);
//   };

//   const prevCase = () => {
//     setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
//   };

//   // Свайп для мобильных
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 50) {
//       nextCase();
//     }

//     if (touchStart - touchEnd < -50) {
//       prevCase();
//     }
//   };

//   return (
//     <section id="case-studies" className="py-20 bg-slate-800 relative overflow-hidden mx-4 rounded-3xl mt-4">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 25% 25%, #00D4FF 2px, transparent 2px),
//                            radial-gradient(circle at 75% 75%, #FF0080 2px, transparent 2px)`,
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={sectionRef}>
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//             Успешные{' '}
//             <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//               кейсы
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Реальные результаты наших клиентов после размещения рекламы на LED-экранах
//           </p>
//         </div>

//         {/* Галерея кейсов */}
//         <div className="relative mb-12">
//           {/* Навигационные кнопки для десктопа */}
//           <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 justify-between">
//             <button
//               onClick={prevCase}
//               className="p-2 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-white hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </button>
//             <button
//               onClick={nextCase}
//               className="p-2 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-white hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </button>
//           </div>

//           {/* Контейнер кейсов */}
//           <div
//             ref={casesRef}
//             className={`relative bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 transition-all duration-500 ${
//               inView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
//             }`}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div className="grid grid-cols-1 lg:grid-cols-2">
//               {/* Изображение */}
//               <div className="relative h-96 lg:h-auto overflow-hidden">
//                 <img
//                   src={cases[activeCase].image}
//                   alt={cases[activeCase].client}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
                
//                 {/* Номер кейса */}
//                 <div className="absolute top-6 left-6">
//                   <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
//                     Кейс #{activeCase + 1}
//                   </span>
//                 </div>
//               </div>

//               {/* Контент */}
//               <div className="p-8 lg:p-12 flex flex-col justify-center">
//                 <h3 className="text-3xl font-bold text-white mb-4">
//                   {cases[activeCase].client}
//                 </h3>
//                 <h4 className="text-xl text-purple-400 mb-6">
//                   {cases[activeCase].campaign}
//                 </h4>
                
//                 <p className="text-gray-300 mb-8 leading-relaxed">
//                   {cases[activeCase].description}
//                 </p>

//                 {/* Теги */}
//                 <div className="flex flex-wrap gap-2 mb-8">
//                   {cases[activeCase].tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="bg-slate-700 text-gray-300 px-3 py-1 rounded-lg text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Результаты */}
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center p-4 bg-slate-800 rounded-xl">
//                     <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
//                       {cases[activeCase].results.increase}
//                     </div>
//                     <div className="text-gray-400 text-sm">
//                       {cases[activeCase].results.metric}
//                     </div>
//                   </div>
//                   <div className="text-center p-4 bg-slate-800 rounded-xl">
//                     <div className="text-3xl font-bold text-white mb-2">
//                       {cases[activeCase].results.period}
//                     </div>
//                     <div className="text-gray-400 text-sm">
//                       период кампании
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Индикаторы для мобильных */}
//           <div className="flex md:hidden justify-center space-x-2 mt-6">
//             {cases.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === activeCase
//                     ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
//                     : 'bg-gray-600 hover:bg-gray-400'
//                 }`}
//                 onClick={() => setActiveCase(index)}
//               ></button>
//             ))}
//           </div>
//         </div>

//         {/* Быстрая статистика */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           {[
//             {
//               icon: TrendingUp,
//               title: 'Средний рост продаж',
//               value: '+58%',
//               description: 'после размещения рекламы на LED-экранах',
//             },
//             {
//               icon: Users,
//               title: 'Охват аудитории',
//               value: '2М+',
//               description: 'человек видят рекламу ежемесячно',
//             },
//             {
//               icon: Calendar,
//               title: 'Средняя длительность',
//               value: '3 недели',
//               description: 'для достижения заметных результатов',
//             },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className={`group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 ${
//                 inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
//               }`}
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               <div className="relative mb-4 inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
//                 <stat.icon className="h-6 w-6 text-white" />
//               </div>
//               <h4 className="text-lg font-semibold text-white mb-2">
//                 {stat.title}
//               </h4>
//               <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
//                 {stat.value}
//               </div>
//               <p className="text-gray-400 text-sm">
//                 {stat.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA секция */}
//         <div className="text-center">
//           <h3 className="text-2xl font-bold text-white mb-4">
//             Готовы увеличить продажи?
//           </h3>
//           <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//             Присоединяйтесь к успешным компаниям, которые уже используют силу LED-рекламы
//           </p>
//           <Button
//             size="lg"
//             className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
//             onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
//           >
//             Обсудить проект
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;


// рабочий вариант

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// type CaseItem = {
//   id: number;
//   client: string;
//   campaign: string | null;
//   description: string;
//   image: string; // video URL
// };

// const CaseStudies = () => {
//   const [cases, setCases] = useState<CaseItem[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchCases = async () => {
//       try {
//         const res = await fetch('http://localhost:1337/api/cases?populate=*');
//         const data = await res.json();

//         const mapped = data.data.map((item: any) => ({
//           id: item.id,
//           client: item.client || item.attributes?.client,
//           campaign: item.campaign || item.attributes?.campaign,
//           description: (item.description || item.attributes?.description || [])
//             .map((p: any) => p.children?.[0]?.text || '')
//             .join('\n\n'),
//           image: 'http://localhost:1337' + (item.image?.url || item.attributes?.image?.data?.attributes?.url || ''),
//         }));

//         setCases(mapped);
//       } catch (error) {
//         console.error('Error fetching cases:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCases();
//   }, []);

//   const nextCase = () => {
//     setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
//   };

//   const prevCase = () => {
//     setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
//   };

//   const goToCase = (index: number) => {
//     setCurrentIndex(index);
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: 'beforeChildren',
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 100 : -100,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 100 : -100,
//       opacity: 0,
//     }),
//   };

//   if (isLoading) {
//     return (
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <div className="h-12 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
//             <div className="h-6 w-64 bg-gray-200 rounded mx-auto"></div>
//           </div>
//           <div className="animate-pulse">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <div className="h-96 bg-gray-200 rounded-xl"></div>
//               <div className="h-96 bg-gray-200 rounded-xl"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (cases.length === 0) {
//     return (
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши кейсы</h2>
//           <p className="text-gray-600">
//             В настоящее время кейсы недоступны. Пожалуйста, зайдите позже.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={sectionVariants}
//           className="text-center mb-12 md:mb-16"
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900"
//           >
//             Наши кейсы
//           </motion.h2>
//           <motion.p
//             variants={itemVariants}
//             className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
//           >
//             Реализованные проекты, которыми мы гордимся
//           </motion.p>
//         </motion.div>

//         <div className="relative">
//           <div className="overflow-hidden">
//             <AnimatePresence mode="wait" custom={1}>
//               <motion.div
//                 key={currentIndex}
//                 custom={1}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.4, ease: 'easeInOut' }}
//                 className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center"
//               >
//                 <div className="relative group">
//                   <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
//                   <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
//                     <video
//                       src={cases[currentIndex].image}
//                       controls
//                       autoPlay
//                       muted
//                       loop
//                       className="w-full h-full object-cover"
//                       playsInline
//                     />
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
//                   <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
//                     {cases[currentIndex].client}
//                   </h3>
//                   <h4 className="text-lg md:text-xl font-semibold mb-4 text-purple-600">
//                     {cases[currentIndex].campaign}
//                   </h4>
//                   <p className="text-gray-600 mb-6 text-base md:text-lg whitespace-pre-line">
//                     {cases[currentIndex].description}
//                   </p>
//                   <button
//                     className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium text-white hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/30"
//                     onClick={() => window.open(`/cases/${cases[currentIndex].id}`, '_blank')}
//                   >
//                     Подробнее о проекте
//                   </button>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {cases.length > 1 && (
//             <>
//               <button
//                 onClick={prevCase}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white hover:bg-gray-50 p-2 md:p-3 rounded-full shadow-md text-gray-800 z-10 transition-all duration-300 border border-gray-200 hover:border-gray-300"
//                 aria-label="Previous case"
//               >
//                 <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
//               </button>
//               <button
//                 onClick={nextCase}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white hover:bg-gray-50 p-2 md:p-3 rounded-full shadow-md text-gray-800 z-10 transition-all duration-300 border border-gray-200 hover:border-gray-300"
//                 aria-label="Next case"
//               >
//                 <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
//               </button>
//             </>
//           )}

//           {cases.length > 1 && (
//             <div className="flex justify-center mt-8 space-x-2">
//               {cases.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToCase(index)}
//                   className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
//                     currentIndex === index
//                       ? 'bg-purple-600 w-4 md:w-6'
//                       : 'bg-gray-300 hover:bg-gray-400'
//                   }`}
//                   aria-label={`Go to case ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {cases.length > 1 && (
//           <div className="mt-12 md:mt-16">
//             <motion.h3
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4 }}
//               className="text-2xl font-bold mb-6 md:mb-8 text-center text-gray-900"
//             >
//               Другие наши проекты
//             </motion.h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//               {cases.map((c, index) => (
//                 <motion.div
//                   key={c.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: '0px 0px -50px 0px' }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   whileHover={{ y: -8 }}
//                   onClick={() => goToCase(index)}
//                   className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
//                     currentIndex === index
//                       ? 'border-purple-500 shadow-lg'
//                       : 'border-gray-200 shadow-sm hover:shadow-md'
//                   }`}
//                 >
//                   <div className="aspect-video overflow-hidden">
//                     <video
//                       src={c.image}
//                       muted
//                       loop
//                       playsInline
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-4 md:p-5">
//                     <h4 className="font-bold text-gray-900 line-clamp-1">{c.client}</h4>
//                     <p className="text-sm text-gray-600 mt-1 line-clamp-2">{c.campaign}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;






// нормальный вариант 

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// type CaseItem = {
//   id: number;
//   client: string;
//   campaign: string;
//   description: string;
//   image: string;
// };

// const CaseStudies = () => {
//   const [cases, setCases] = useState<CaseItem[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     fetch('http://localhost:1337/api/cases?populate=*')
//       .then(res => res.json())
//       .then(res => {
//         const mapped = res.data.map((item: any) => ({
//           id: item.id,
//           client: item.client || item.attributes?.client,
//           campaign: item.campaign || item.attributes?.campaign,
//           description: item.description
//             ? item.description[0]?.children[0]?.text || ''
//             : item.attributes?.description?.[0]?.children?.[0]?.text || '',
//           image:
//             'http://localhost:1337' +
//             (item.image?.url ||
//               item.attributes?.image?.data?.attributes?.url ||
//               ''),
//         }));
//         setCases(mapped);
//       });
//   }, []);

//   const nextCase = () => {
//     setCurrentIndex(prev => (prev === cases.length - 1 ? 0 : prev + 1));
//   };

//   const prevCase = () => {
//     setCurrentIndex(prev => (prev === 0 ? cases.length - 1 : prev - 1));
//   };

//   const variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   if (cases.length === 0) return null;

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={variants}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//             Наши кейсы
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Реализованные проекты, которыми мы гордимся
//           </p>
//         </motion.div>

//         <div className="relative">
//           <div className="overflow-hidden">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.5 }}
//               className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
//             >
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
//                 <img
//                   src={cases[currentIndex].image}
//                   alt={cases[currentIndex].client}
//                   className="relative rounded-xl w-full h-80 lg:h-96 object-cover shadow-lg"
//                 />
//               </div>
//               <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
//                   {cases[currentIndex].client}
//                 </h3>
//                 <h4 className="text-lg md:text-xl font-semibold mb-4 text-purple-600">
//                   {cases[currentIndex].campaign}
//                 </h4>
//                 <p className="text-gray-600 mb-6 text-lg">
//                   {cases[currentIndex].description}
//                 </p>
//                 <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium text-white hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-purple-500/20">
//                   Подробнее о проекте
//                 </button>
//               </div>
//             </motion.div>
//           </div>

//           {cases.length > 1 && (
//             <>
//               <button
//                 onClick={prevCase}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 p-3 rounded-full shadow-md text-gray-800 z-10 transition-all duration-300 border border-gray-200"
//                 aria-label="Previous case"
//               >
//                 <ChevronLeft size={24} />
//               </button>
//               <button
//                 onClick={nextCase}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 p-3 rounded-full shadow-md text-gray-800 z-10 transition-all duration-300 border border-gray-200"
//                 aria-label="Next case"
//               >
//                 <ChevronRight size={24} />
//               </button>
//             </>
//           )}

//           {cases.length > 1 && (
//             <div className="flex justify-center mt-8 space-x-2">
//               {cases.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-purple-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
//                   aria-label={`Go to case ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {cases.length > 1 && (
//           <div className="mt-16">
//             <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
//               Другие наши проекты
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {cases.map((c, index) => (
//                 <motion.div
//                   key={c.id}
//                   whileHover={{ y: -5 }}
//                   transition={{ duration: 0.3 }}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`bg-white rounded-xl overflow-hidden border ${currentIndex === index ? 'border-purple-500 shadow-md' : 'border-gray-200 shadow-sm'} cursor-pointer transition-all duration-300`}
//                 >
//                   <img
//                     src={c.image}
//                     alt={c.client}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-5">
//                     <h4 className="font-bold text-gray-900">{c.client}</h4>
//                     <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                       {c.campaign}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;


// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { TrendingUp, Users, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface Case {
//   id: number;
//   client: string;
//   campaign: string;
//   description: string;
//   image: string;
// }

// const CaseStudies = () => {
//   const [inView, setInView] = useState(false);
//   const [activeCase, setActiveCase] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const [cases, setCases] = useState<Case[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const casesRef = useRef<HTMLDivElement>(null);

//   // Загрузка данных с бэкенда
//   useEffect(() => {
//     async function fetchCases() {
//       try {
//         setLoading(true);
//         setError(null);
        
//         const response = await fetch('http://localhost:1337/api/cases?populate=*');
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const { data } = await response.json();
        
//         if (!data || !Array.isArray(data)) {
//           throw new Error('Invalid data format from API');
//         }
// console.log('✅ API data:', data);

// const formattedCases = data.map(item => {
//   const imageUrl =
//     item.image?.url
//       ? `http://localhost:1337${item.image.url}`
//       : item.image?.formats?.large?.url
//         ? `http://localhost:1337${item.image.formats.large.url}`
//         : '';

//   return {
//     id: item.id,
//     client: item.client || 'Не указано',
//     campaign: item.campaign || 'Не указано',
//     description: item.description?.[0]?.children?.[0]?.text || 'Описание отсутствует',
//     image: imageUrl,
//   };
// });







//         setCases(formattedCases);
//       } catch (err) {
//         console.error('Error fetching cases:', err);
//         setError(err instanceof Error ? err.message : 'Unknown error');
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchCases();
//   }, []);

//   // Intersection Observer для анимаций
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setInView(entry.isIntersecting),
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Автопрокрутка (только если есть кейсы)
//   useEffect(() => {
//     if (cases.length <= 1) return;
//     const timer = setInterval(nextCase, 5000);
//     return () => clearInterval(timer);
//   }, [activeCase, cases]);

//   // Навигация
//   const nextCase = () => {
//     if (cases.length === 0) return;
//     setActiveCase((prev) => (prev + 1) % cases.length);
//   };

//   const prevCase = () => {
//     if (cases.length === 0) return;
//     setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
//   };

//   // Свайп для мобильных
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 50) nextCase();
//     if (touchStart - touchEnd < -50) prevCase();
//   };

//   if (loading) return <div className="text-center py-20 text-white">Загрузка кейсов...</div>;
//   if (error) return <div className="text-center py-20 text-white">Ошибка: {error}</div>;
//   if (cases.length === 0) return <div className="text-center py-20 text-white">Кейсы не найдены</div>;

//   return (
//     <section id="case-studies" className="py-20 bg-slate-800 relative overflow-hidden mx-4 rounded-3xl mt-4">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 25% 25%, #00D4FF 2px, transparent 2px),
//                            radial-gradient(circle at 75% 75%, #FF0080 2px, transparent 2px)`,
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={sectionRef}>
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//             Успешные{' '}
//             <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//               кейсы
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Реальные результаты наших клиентов после размещения рекламы на LED-экранах
//           </p>
//         </div>

//         {/* Галерея кейсов */}
//         <div className="relative mb-12">
//           {/* Навигационные кнопки */}
//           <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 justify-between">
//             <button
//               onClick={prevCase}
//               className="p-2 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-white hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </button>
//             <button
//               onClick={nextCase}
//               className="p-2 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-white hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </button>
//           </div>

//           {/* Контейнер кейсов */}
//           <div
//             ref={casesRef}
//             className={`relative bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 transition-all duration-500 ${
//               inView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'
//             }`}
//             onTouchStart={handleTouchStart}
//             onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div className="grid grid-cols-1 lg:grid-cols-2">
//               {/* Изображение */}
//               <div className="relative h-96 lg:h-auto overflow-hidden">
//                 {cases[activeCase].image && (
//                   <>
//                     <img
//                       src={cases[activeCase].image}
//                       alt={cases[activeCase].client}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
//                   </>
//                 )}
                
//                 {/* Номер кейса */}
//                 <div className="absolute top-6 left-6">
//                   <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
//                     Кейс #{activeCase + 1}
//                   </span>
//                 </div>
//               </div>

//               {/* Контент */}
//               <div className="p-8 lg:p-12 flex flex-col justify-center">
//                 <h3 className="text-3xl font-bold text-white mb-4">
//                   {cases[activeCase].client}
//                 </h3>
//                 <h4 className="text-xl text-purple-400 mb-6">
//                   {cases[activeCase].campaign}
//                 </h4>
                
//                 <p className="text-gray-300 mb-8 leading-relaxed">
//                   {cases[activeCase].description}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Индикаторы */}
//           <div className="flex justify-center space-x-2 mt-6">
//             {cases.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === activeCase
//                     ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
//                     : 'bg-gray-600 hover:bg-gray-400'
//                 }`}
//                 onClick={() => setActiveCase(index)}
//               ></button>
//             ))}
//           </div>
//         </div>

//         {/* Быстрая статистика */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           {[
//             {
//               icon: TrendingUp,
//               title: 'Средний рост продаж',
//               value: '+58%',
//               description: 'после размещения рекламы на LED-экранах',
//             },
//             {
//               icon: Users,
//               title: 'Охват аудитории',
//               value: '2М+',
//               description: 'человек видят рекламу ежемесячно',
//             },
//             {
//               icon: Calendar,
//               title: 'Средняя длительность',
//               value: '3 недели',
//               description: 'для достижения заметных результатов',
//             },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className={`group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 ${
//                 inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
//               }`}
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               <div className="relative mb-4 inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
//                 <stat.icon className="h-6 w-6 text-white" />
//               </div>
//               <h4 className="text-lg font-semibold text-white mb-2">
//                 {stat.title}
//               </h4>
//               <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
//                 {stat.value}
//               </div>
//               <p className="text-gray-400 text-sm">
//                 {stat.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA секция */}
//         <div className="text-center">
//           <Button
//             size="lg"
//             className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
//             onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
//           >
//             Обсудить проект
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;







'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type CaseItem = {
  id: number;
  client: string;
  campaign: string | null;
  description: string;
  video_url: string;
};

const CaseStudies = () => {
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchCases = async () => {
      try {
        // Получаем данные о кейсах
        const { data: casesData, error: casesError } = await supabase
          .from('cases')
          .select('*')
          .order('created_at', { ascending: false });

        if (casesError) throw casesError;

        // Получаем URL для видео из Storage
        const casesWithUrls = await Promise.all(
          casesData.map(async (caseItem) => {
            const { data: urlData } = supabase
              .storage
              .from('cases')
              .getPublicUrl(caseItem.video_path);

            return {
              id: caseItem.id,
              client: caseItem.client,
              campaign: caseItem.campaign,
              description: caseItem.description,
              video_url: urlData.publicUrl
            };
          })
        );

        setCases(casesWithUrls);
      } catch (error) {
        console.error('Error fetching cases:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCases();
  }, [supabase]);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const goToCase = (index: number) => {
    setCurrentIndex(index);
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-12 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-6 w-64 bg-gray-200 rounded mx-auto"></div>
          </div>
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 rounded-xl"></div>
              <div className="h-96 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (cases.length === 0) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши кейсы</h2>
          <p className="text-gray-600">
            В настоящее время кейсы недоступны. Пожалуйста, зайдите позже.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Наши кейсы
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Реализованные проекты, которыми мы гордимся
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={currentIndex}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center"
              >
                <div className="relative group">
                  {/* <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div> */}
                  <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
                    <video
                      src={cases[currentIndex].video_url}
                      controls
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                      playsInline
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                    {cases[currentIndex].client}
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold mb-4 text-purple-600">
                    {cases[currentIndex].campaign}
                  </h4>
                  <p className="text-gray-600 mb-6 text-base md:text-lg whitespace-pre-line">
                    {cases[currentIndex].description}
                  </p>
                  {/* <button
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium text-white hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/30"
                    onClick={() => window.open(`/cases/${cases[currentIndex].id}`, '_blank')}
                  >
                    Подробнее о проекте
                  </button> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {cases.length > 1 && (
            <>
              <button
                onClick={prevCase}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white hover:bg-gray-50 p-2 md:p-3 rounded-full shadow-md text-gray-800 z-10 transition-all duration-300 border border-gray-200 hover:border-gray-300"
                aria-label="Previous case"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextCase}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white hover:bg-gray-50 p-2 md:p-3 rounded-full shadow-md text-gray-800 z-10 transition-all duration-300 border border-gray-200 hover:border-gray-300"
                aria-label="Next case"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          {cases.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCase(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-purple-600 w-4 md:w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to case ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Скрываем на мобильных устройствах и показываем только на десктопах */}
        {cases.length > 1 && (
          <div className="mt-12 md:mt-16 hidden md:block">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-bold mb-6 md:mb-8 text-center text-gray-900"
            >
              Другие наши проекты
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {cases.map((c, index) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => goToCase(index)}
                  className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? 'border-purple-500 shadow-lg'
                      : 'border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="aspect-video overflow-hidden">
                    <video
                      src={c.video_url}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h4 className="font-bold text-gray-900 line-clamp-1">{c.client}</h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{c.campaign}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;