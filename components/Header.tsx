'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Zap, Phone, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Главная', href: '#home' },
    { name: 'Наши экраны', href: '#screens' },
    { name: 'Почему мы', href: '#advantages' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed z-50 left-0 right-0 transition-all duration-300 mt-4 mx-4 rounded-3xl px-4 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border border-purple-500/20 shadow-md'
          : 'bg-slate-800/70'
      }`}
    >
      <div className="flex items-center justify-between h-20">
        {/* Левый блок — меню */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-white">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-purple-400 transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Центр — логотип с фиолетовым градиентом */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <Zap className="h-8 w-8 text-purple-400 animate-pulse" />
          <span className="text-2xl font-bold">
            <span 
              className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(45deg, #8B5CF6, #EC4899)' }}
            >
              ISAGROUP
            </span>
          </span>
        </div>

        {/* Правый блок — номер и иконки */}
        <div className="hidden md:flex items-center space-x-4 text-white">
          <a href="tel:+77081552325" className="hover:text-purple-400 text-sm">
            +7 (708) 155-23-25
          </a>
          <a href="https://wa.me/77081552325" target="_blank" rel="noreferrer">
            <MessageCircle className="h-5 w-5 hover:text-purple-400" />
          </a>
          <a href="https://www.instagram.com/isa_group_led?igsh=cG54cmU5NnR1Y3Ri&utm_source=qr" target="_blank" rel="noreferrer">
            <Instagram className="h-5 w-5 hover:text-pink-400" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="py-4 space-y-4 border-t border-gray-700 text-white">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-2 hover:text-purple-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a href="tel:+77777777777" className="block px-2">
            +7 (777) 777-77-77
          </a>
          <div className="flex space-x-4 px-2">
            <a href="https://wa.me/77777777777" target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5 hover:text-purple-400" />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer">
              <Instagram className="h-5 w-5 hover:text-pink-400" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;