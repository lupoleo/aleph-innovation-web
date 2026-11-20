// Language helpers for the English (default), Italian and Maltese versions of the site.
// English pages keep their URLs; every translated page is the same path under
// its language prefix (/it/, /mt/).

export type Lang = "en" | "it" | "mt";

export const languages: Record<Lang, { label: string; name: string; htmlLang: string; ogLocale: string }> = {
  en: { label: "EN", name: "English", htmlLang: "en", ogLocale: "en_GB" },
  it: { label: "IT", name: "Italiano", htmlLang: "it", ogLocale: "it_IT" },
  mt: { label: "MT", name: "Malti", htmlLang: "mt", ogLocale: "mt_MT" },
};

/** All languages, in the order shown in the language switcher. */
export const langCodes = Object.keys(languages) as Lang[];

/** Languages with a URL prefix (every language except the default English). */
const prefixed = langCodes.filter((code) => code !== "en");

function prefixOf(path: string): Lang | undefined {
  return prefixed.find((code) => path === `/${code}` || path.startsWith(`/${code}/`));
}

/** Language of the page being rendered, from its URL. */
export function getLang(astro: { currentLocale?: string; url: URL }): Lang {
  if (astro.currentLocale && astro.currentLocale in languages) {
    return astro.currentLocale as Lang;
  }
  return prefixOf(astro.url.pathname) ?? "en";
}

/** Path without the language prefix, so it can be rebuilt for any language. */
export function stripLang(path: string): string {
  const code = prefixOf(path);
  if (!code) return path;
  const rest = path.slice(code.length + 1);
  return rest === "" ? "/" : rest;
}

/**
 * Turn an internal English path ("/services/", "/#contact") into the
 * equivalent path for the given language. Static apps that only exist in
 * English (such as the Gozo Risk Map) are left as they are.
 */
export function localizePath(path: string, lang: Lang): string {
  if (lang === "en") return stripLang(path);
  if (!path.startsWith("/") || path.startsWith("/gozo-risk-map")) return path;
  const base = stripLang(path);
  return base === "/" ? `/${lang}/` : `/${lang}${base}`;
}

/** Equivalent path of the current page in every language. */
export function alternatePaths(pathname: string): Record<Lang, string> {
  const base = stripLang(pathname);
  return Object.fromEntries(
    langCodes.map((code) => [code, localizePath(base, code)])
  ) as Record<Lang, string>;
}

/**
 * Pages that are not translated into Maltese and show the English text
 * (with a short notice) under /mt/. They point search engines to the
 * English page as canonical and are left out of the Maltese hreflang set.
 */
export function isEnglishOnlyInMaltese(path: string): boolean {
  const base = stripLang(path);
  return base === "/wiki" || base.startsWith("/wiki/");
}
