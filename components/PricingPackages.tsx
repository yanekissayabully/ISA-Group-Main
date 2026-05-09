'use client';

import { Zap, BadgePercent, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingPackages = () => {
  const packages = [
    {
      name: 'Пакет "Выгодный"',
      discount: '20%',
      icon: BadgePercent,
      rotation: 'Выход рекламы каждые 3 минуты',
      price: '380 000₸',
      locations: [
        { name: 'Г. Талгар', outputs: '1', price: '480' },
        { name: 'Г. Есик', outputs: '3', price: '480' },
        { name: 'Г. Каскален', outputs: '2', price: '480' }
      ],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Пакет "Супер Эффективный"',
      discount: '35%',
      icon: Zap,
      rotation: 'Выход рекламы каждые 1.5 минуты',
      price: '500 000₸',
      locations: [
        { name: 'Г. Талгар', outputs: '1', price: '960' },
        { name: 'Г. Есик', outputs: '3', price: '960' },
        { name: 'Г. Каскален', outputs: '2', price: '960' }
      ],
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden mx-4 rounded-3xl mt-4 shadow-lg">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Наши{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              рекламные пакеты
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Максимальный охват аудитории по специальным ценам
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Package Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 sm:gap-0">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center">
                    <p className={`bg-gradient-to-r ${pkg.gradient} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-sm`}>
                      <pkg.icon className="h-4 w-4 mr-2" />
                      Скидка - {pkg.discount}
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                  <p className="text-gray-500 text-sm">за 30 дней</p>
                </div>
              </div>

              {/* Rotation Info */}
              <div className="flex items-center bg-gray-50 rounded-lg p-3 mb-6 border border-gray-100">
                <Clock className="h-5 w-5 text-purple-500 mr-3" />
                <span className="text-gray-700">{pkg.rotation}</span>
              </div>

              {/* Locations Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left pb-3 text-gray-600 font-medium">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                          Локация
                        </div>
                      </th>
                      <th className="text-center pb-3 text-gray-600 font-medium">Кол-во экранов</th>
                      <th className="text-right pb-3 text-gray-600 font-medium">Выходов/сутки</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.locations.map((location, locIndex) => (
                      <tr key={locIndex} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="py-2 sm:py-3 text-gray-900 font-medium">{location.name}</td>
                        <td className="py-2 sm:py-3 text-center text-gray-600">{location.outputs}</td>
                        <td className="py-2 sm:py-3 text-right text-gray-600">{location.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <Button
                  className={`w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white border-none shadow-md transform hover:scale-[1.02] transition-all duration-300 py-5 sm:py-6 text-base sm:text-lg`}
                  onClick={() => document.getElementById('contact-form-simple')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Заказать пакет
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
<div className="text-center text-gray-500 max-w-3xl mx-auto space-y-2">
  {/* <p>Стоимость указана с учетом налога на рекламу:</p> */}
  <ul className=" text-left inline-block text-gray-500">
    <li>- Стоимость указана с учетом налога на рекламу</li>
    <li>- Цены указаны без учета НДС</li>
    <li>- LED-экраны демонстрируют контент без аудиосопровождения</li>
    <li>- Возможна индивидуальная настройка пакетов под ваши задачи</li>
  </ul>
</div>

      </div>
    </section>
  );
};

export default PricingPackages;
