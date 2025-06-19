'use client';

import { useState } from 'react';
import { Phone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const ContactFormSimple = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+7',
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await fetch('/api/send-to-telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
      }),
    });

    console.log('Заявка отправлена');
    setFormData({ name: '', phone: '+7' });
  } catch (err) {
    console.error('Ошибка при отправке в Telegram:', err);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-form-simple" className="py-20 bg-white relative overflow-hidden mx-4 rounded-3xl mt-4 shadow-xl">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Column - Form */}
          <div className="w-full md:w-1/2">
            <div className="text-center md:text-left mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Остались{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  вопросы?
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Оставьте ваши контактные данные и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                    Ваше имя
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 text-lg py-6 hover:border-gray-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                    Телефон
                  </label>
                  <div className="relative">
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 text-lg py-6 pl-12 hover:border-gray-400 transition-colors"
                      required
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                      <Phone className="h-5 w-5 text-gray-500 mr-2" />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-none shadow-lg hover:shadow-blue-500/30 transform hover:scale-[1.02] transition-all duration-300 py-6 text-lg font-semibold"
                >
                  Получить консультацию
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="mt-6 text-center text-gray-500 text-sm">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 hidden lg:block">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://i.pinimg.com/736x/b1/e1/0f/b1e10fa8f621f416250dea87b014d672.jpg"
                alt="Контактная форма"
                fill
                className="object-cover"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-cyan-500/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSimple;
