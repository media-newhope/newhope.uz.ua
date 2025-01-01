import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { LANGUAGE } from "@/app/locales/models";
import { TRANSLATION as EN_TRANSLATION } from "@/app/locales/en/common";
import { TRANSLATION as UK_TRANSLATION } from "@/app/locales/uk/common";
import { LangProps } from "@/app/locales/models";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTranslation(lang: LANGUAGE) {
  return (token: LangProps) => {
    switch (lang) {
      case LANGUAGE.EN:
        return EN_TRANSLATION[token];
      case LANGUAGE.UK:
        return UK_TRANSLATION[token];
    }
  };
}
