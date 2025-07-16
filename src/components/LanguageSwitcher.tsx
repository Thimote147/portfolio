import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇧🇪" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-32 rounded-md bg-gray-100 border border-gray-200 py-2 px-3 text-sm text-gray-700 backdrop-blur-sm hover:bg-gray-200 transition-colors duration-200 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20"
      >
        <span className="flex items-center">
          <span className="mr-1">{currentLanguage.flag}</span>
          <span className="font-medium">{currentLanguage.name}</span>
        </span>
        <ChevronDownIcon
          className={`h-3 w-3 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div className="absolute top-full mt-1 left-0 w-32 bg-white border border-gray-200 rounded-md shadow-xl backdrop-blur-md z-50 overflow-hidden dark:bg-slate-800/95 dark:border-white/20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 ${
                  lang.code === i18n.language
                    ? "bg-blue-500/20 text-blue-600 dark:text-blue-300"
                    : "text-gray-700 dark:text-white dark:hover:bg-white/10"
                }`}
              >
                <span className="flex items-center">
                  <span className="mr-2">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                </span>
              </button>
            ))}
          </div>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
}
