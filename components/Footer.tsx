'use client';

import { Zap, Phone, Mail, MapPin, Instagram, Facebook, Send , MessageCircle} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/77777777777',
      label: 'WhatsApp',
      gradient: 'from-green-400 to-green-600',
    },
    {
      icon: Send,
      href: '#',
      label: 'Telegram',
      gradient: 'from-blue-400 to-blue-500',
    },
  ];

  const navigation = [
    { name: 'Главная', href: '#home' },
    { name: 'Наши экраны', href: '#screens' },
    { name: 'Почему мы', href: '#advantages' },
    // { name: 'Кейсы', href: '#cases' },
    { name: 'Цены', href: '#pricing' },
  ];

  const services = [
    'Размещение рекламы на LED-экранах',
    'Производство рекламного контента',
    'Консультации по медиапланированию',
    'Аналитика и отчетность',
    'Техническая поддержка 24/7',
  ];

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #00D4FF 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #FF0080 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%,rgb(2, 4, 52) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Zap className="h-8 w-8 text-purple-400 animate-pulse" />
                <div className="absolute inset-0 h-8 w-8 text-purple-400 animate-ping opacity-20">
                  <Zap className="h-8 w-8" />
                </div>
              </div>
              <span className="text-2xl font-bold text-white">
                            <span 
              className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(45deg, #8B5CF6, #EC4899)' }}
            >
              ISAGROUP
            </span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Мы создаем яркие и эффективные рекламные кампании на LED-экранах в Алматы. 
              Помогаем бизнесу привлекать больше клиентов через современные цифровые технологии.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`group p-3 rounded-lg bg-gradient-to-r ${social.gradient} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Навигация</h3>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          {/* Contact Info */}
          <div id='contacts'>
            <h3 className="text-lg font-semibold text-white mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+77273002030" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    +7 (727) 300-20-30
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@ledart.kz" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    info@ledart.kz
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-400">
                    г. Алматы, пр. Абая, 150
                  </span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
              <h4 className="text-sm font-semibold text-white mb-2">Режим работы:</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <div>Пн-Пт: 09:00 - 18:00</div>
                <div>Сб: 10:00 - 16:00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} ISAGROUP. Все права защищены.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Публичная оферта
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Реквизиты
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-1 h-1 bg-pink-500 rounded-full animate-pulse opacity-80"></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
};

export default Footer;