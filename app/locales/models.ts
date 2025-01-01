export type LangProps =
  | "NAV.ABOUT"
  | "NAV.SERVICE"
  | "NAV.BUILDING"
  | "NAV.GIVING"
  | "HERO.JOIN";

export type LangObj = {
  [key in LangProps]: string;
};

export enum LANGUAGE {
  "UK" = "uk",
  "EN" = "en",
}
