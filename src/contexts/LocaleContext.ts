import es from "../locales/es";
import en from "../locales/en";
import { createContext } from "react";

const localesMessages = {
  en,
  es,
};

const supportedLocales = ["en", "es"] as const;
type SupportedLocale = "en" | "es";

const getDefaultLocale = (): SupportedLocale => {
  const navLang = navigator.language.split("-")[0];
  return supportedLocales.includes(navLang as SupportedLocale) ? (navLang as SupportedLocale) : "en";
};

const defaultLocale = getDefaultLocale();

const getMessages = (locale: SupportedLocale) => {
  return localesMessages[locale];
};

const LocaleContext = createContext({
  locale: defaultLocale,
  changeLocale: (_: SupportedLocale) => {},
});

export type { SupportedLocale };
export { LocaleContext, getMessages, defaultLocale };

