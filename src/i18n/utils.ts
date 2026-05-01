import en from './locales/en.json';
import es from './locales/es.json';
import { defaultLang } from './index';

const dicts: Record<string, any> = { en, es };

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in dicts) return lang as keyof typeof dicts;
  return defaultLang;
}

export function useTranslations(lang: string) {
  return function t(key: string) {
    return dicts[lang]?.[key] || dicts[defaultLang]?.[key] || key;
  }
}