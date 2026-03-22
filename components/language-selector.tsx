"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "en", name: "English", flag: "🇺🇸", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "az", name: "Azərbaycanca", flag: "🇦🇿", dir: "ltr" },
  { code: "et", name: "Eesti", flag: "🇪🇪", dir: "ltr" },
  { code: "ru", name: "Русский", flag: "🇷🇺", dir: "ltr" },
];

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      const lang = languages.find((l) => l.code === savedLang);
      if (lang) setSelectedLanguage(lang);
    }
  }, []);

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language);
    localStorage.setItem("language", language.code);

    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: language.code }),
    );

    document.documentElement.lang = language.code;
    document.documentElement.dir = language.dir;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {selectedLanguage.flag} {selectedLanguage.name}
          </span>
          <span className="sm:hidden">{selectedLanguage.flag}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="flex items-center space-x-2"
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
