import { LANG_URL_MAP } from "@/app/sections/models";
import { LANGUAGE } from "@/app/locales/models";

export function getPageUrl(lang: LANGUAGE, pageFraction: string) {
  return (
    (LANG_URL_MAP[lang] === "/" ? "" : LANG_URL_MAP[lang]) + "/" + pageFraction
  );
}
