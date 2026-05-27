import React from 'react';
import { motion } from 'framer-motion';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold gradient-text mb-2"
            >
              MM
            </motion.div>
            <p className="text-dark-500 text-sm">
              © {currentYear} Matej Mikušiak. Všetky práva vyhradené.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['Domov', 'O mne', 'Projekty', 'Zručnosti', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-dark-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Built with */}
          <div className="text-center md:text-right">
            <p className="text-dark-500 text-sm">
              Postavené s{' '}
              <span className="text-red-500">♥</span>{' '}
              pomocou Astro & React
            </p>
          </div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-violet/50 to-transparent"
        />
      </div>
    </footer>
  );
}