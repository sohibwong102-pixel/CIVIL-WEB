/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// 🧭 NAVBAR COMPONENT - fixed header dengan logo, menu, theme toggle
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  // 🔄 State management
  const [isOpen, setIsOpen] = useState(false); // mobile menu buka/tutup
  const [isDark, setIsDark] = useState(false); // theme dark mode

  // ⚡ Check dark mode saat component mount
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  // 🌓 Toggle dark/light theme - add/remove class di html + save ke localStorage
  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // 📍 Navigation links - list halaman yang bisa dikunjungi
  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Journey', path: '/journey' },
    { name: 'Docs', path: '/docs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 🎨 LOGO SECTION - klik untuk balik ke home */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 font-sans font-medium tracking-tight text-slate-700 dark:text-slate-300">
              <span className="text-xl text-slate-900 dark:text-slate-50 select-none">🚀</span>
              <span>LumaSite API</span>
            </a>
          </div>

          {/* 📱 DESKTOP NAV - tampil hanya di layar medium keatas (md:) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* 🎛️ DESKTOP ACTION BUTTONS - theme toggle + CTA button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark/Light theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-slate-200/60 dark:border-slate-800/60 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all cursor-pointer"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* CTA button - main call-to-action */}
            <a
              href="/try-now"
              className="px-4 py-1.5 text-xs font-mono tracking-wide rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all font-medium text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              TRY NOW
            </a>
          </div>

          {/* 📱 MOBILE BUTTONS - theme toggle + hamburger menu (hanya di mobile) -->
          <div className="flex md:hidden items-center space-x-2">
            {/* Theme toggle button (mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-slate-200/60 dark:border-slate-800/60 rounded-lg text-slate-600 dark:text-slate-400 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Hamburger menu button - buka/tutup mobile drawer */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-slate-200/60 dark:border-slate-800/60 rounded-lg text-slate-600 dark:text-slate-400 cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

      {/* 📂 MOBILE DRAWER - menu dropdown yang tampil di mobile saat hamburger diklik */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-50/95 dark:bg-slate-950/95 transition-all">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="block px-3 py-2.5 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="/try-now"
                className="block text-center px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900"
                onClick={() => setIsOpen(false)}
              >
                TRY NOW
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
