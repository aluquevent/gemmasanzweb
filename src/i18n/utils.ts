import type { Lang, Localized, LocalizedArray } from '../types/content';

export function getLangFromUrl(url: URL): Lang {
  const path = url.pathname;
  if (path.startsWith('/en/') || path === '/en') {
    return 'en';
  }
  return 'es';
}

export function t(field: Localized, lang: Lang): string {
  return field[lang];
}

export function tArray(field: LocalizedArray, lang: Lang): string[] {
  return field[lang];
}

const routeMap: Record<string, Record<Lang, string>> = {
  proyectos: { es: 'proyectos', en: 'projects' },
  projects: { es: 'proyectos', en: 'projects' },
  'sobre-mi': { es: 'sobre-mi', en: 'about' },
  about: { es: 'sobre-mi', en: 'about' },
  cv: { es: 'cv', en: 'cv' },
};

export function getAlternateUrl(currentPath: string, targetLang: Lang): string {
  const cleanPath = currentPath.replace(/^\/en\/?/, '/').replace(/\/$/, '') || '/';

  if (cleanPath === '/') {
    return targetLang === 'en' ? '/en' : '/';
  }

  const segments = cleanPath.split('/').filter(Boolean);
  const firstSegment = segments[0];
  const mapped = routeMap[firstSegment]?.[targetLang] ?? firstSegment;
  const rest = segments.slice(1).join('/');
  const newPath = rest ? `/${mapped}/${rest}` : `/${mapped}`;

  return targetLang === 'en' ? `/en${newPath}` : newPath;
}
