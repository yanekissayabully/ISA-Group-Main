'use client';

import { Zap, BadgePercent, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingPackages = () => {
  const packages = [
    {
      name: 'Пакет "Выгодный"',
      discount: '40%',
      icon: BadgePercent,
      rotation: 'Каждые 3 минуты',
      price: '360 000 ₸',
      locations: [
        { name: 'Г. Талгар', outputs: '480', price: '360 000 ₸' },
        { name: 'Г. Есик', outputs: '480', price: '360 000 ₸' },
        { name: 'Г. Каскален', outputs: '480', price: '360 000 ₸' }
      ],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Пакет "Супер Эффективный"',
      discount: '45%',
      icon: Zap,
      rotation: 'Каждые 1.5 минуты',
      price: '495 000 ₸',
      locations: [
        { name: 'Г. Талгар ул. Комаева', outputs: '960', price: '495 000 ₸' },
        { name: 'Г. Есик ул. Алматинская', outputs: '960', price: '495 000 ₸' },
        { name: 'Г. Есик ул. Абая', outputs: '960', price: '495 000 ₸' },
        { name: 'Г. Есик ул. Алтын Адам', outputs: '960', price: '495 000 ₸' },
        { name: 'Г. Каскален автостанция', outputs: '960', price: '495 000 ₸' },
        { name: 'Г. Каскален ТЦ «Алатау»', outputs: '960', price: '495 000 ₸' }
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
              className={`group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Package Header */}
              <div className="flex items-start justify-between mb-6">
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
                <div className="text-right">
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
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left pb-3 text-gray-600 font-medium">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                          Локация
                        </div>
                      </th>
                      <th className="text-center pb-3 text-gray-600 font-medium">Выходов/сутки</th>
                      <th className="text-right pb-3 text-gray-600 font-medium">Стоимость</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.locations.map((location, locIndex) => (
                      <tr key={locIndex} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                        <td className="py-3 text-gray-900 font-medium">{location.name}</td>
                        <td className="py-3 text-center text-gray-600">{location.outputs}</td>
                        <td className="py-3 text-right text-gray-600">{location.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <Button
                  className={`w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white border-none shadow-md transform hover:scale-[1.02] transition-all duration-300 py-6 text-lg`}
                >
                  Заказать пакет
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center text-gray-500 max-w-3xl mx-auto">
          <p>Все цены указаны с учетом НДС. Возможна индивидуальная настройка пакетов под ваши задачи.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;