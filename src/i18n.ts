// Language helpers for the English (default) and Italian versions of the site.
// English pages keep their URLs; every Italian page is the same path under /it/.

export type Lang = "en" | "it";

export const languages: Record<Lang, { label: string; name: string; htmlLang: string; ogLocale: string }> = {
  en: { label: "EN", name: "English", htmlLang: "en", ogLocale: "en_GB" },
  it: { label: "IT", name: "Italiano", htmlLang: "it", ogLocale: "it_IT" },
};

/** Language of the page being rendered, from its URL. */
export function getLang(astro: { currentLocale?: string; url: URL }): Lang {
  if (astro.currentLocale === "it") return "it";
  const path = astro.url.pathname;
  return path === "/it" || path.startsWith("/it/") ? "it" : "en";
}

/** Path without the /it prefix, so it can be rebuilt for either language. */
export function stripLang(path: string): string {
  if (path === "/it" || path === "/it/") return "/";
  return path.startsWith("/it/") ? path.slice(3) : path;
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
  return base === "/" ? "/it/" : `/it${base}`;
}

/** Equivalent path of the current page in every language. */
export function alternatePaths(pathname: string): Record<Lang, string> {
  const base = stripLang(pathname);
  return { en: base, it: localizePath(base, "it") };
}
