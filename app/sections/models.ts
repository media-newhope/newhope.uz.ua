import { HTMLAttributes } from "react";
import { LANGUAGE } from "@/app/locales/models";

export interface PageSectionProps extends HTMLAttributes<HTMLElement> {
  lang: LANGUAGE;
}

export enum SITE_LINKS {
  ABOUT = "#about",
  SERVICES = "#services",
  BUILDING = "#building",
  GIVING = "#giving",
  JOIN = "#join",
  FEEDBACK = "#feedback",
  GOOGLE_MAPS = "https://maps.app.goo.gl/hw979PjViKu7Ygd59",
  YOUTUBE = "https://www.youtube.com/@NewHopeUzh",
  FACEBOOK = "https://www.facebook.com/newhopeuzhgorod",
  INSTAGRAM = "https://www.instagram.com/newhopeuzh",
  TELEGRAM = "https://t.me/NewHopeUzh",
}

export const LANG_URL_MAP = {
  [LANGUAGE.EN]: "/en",
  [LANGUAGE.UK]: "/",
};
