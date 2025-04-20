import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          className={`flex items-center px-3 py-1 rounded-full text-sm ${
            language === lang.code
              ? 'bg-turmeric-500 text-black'
              : 'bg-gray-800 text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage(lang.code)}
        >
          <span className="mr-2">{lang.flag}</span>
          {lang.name}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;