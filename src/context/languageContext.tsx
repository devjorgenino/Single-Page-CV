import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";

type Language = "en" | "es";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

export const LanguageProvider = ({
  children,
  initialLang = "es",
}: {
  children: ReactNode;
  initialLang?: Language;
}) => {
  const [language, setLanguage] = useState<Language>(initialLang);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "es" : "en"));

  const setLanguageWrapper = (lang: Language) => setLanguage(lang);
  const value = useMemo(
    () => ({ language, toggleLanguage, setLanguage: setLanguageWrapper }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
