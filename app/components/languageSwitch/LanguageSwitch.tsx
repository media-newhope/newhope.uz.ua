"use client";


import { usePathname, useRouter } from "next/navigation";
import Button from "../button/Button";

interface LanguageSwitchProps {
  currentLanguage: "en" | "uk";
}

export const LanguageSwitch = ({
  currentLanguage = "uk",
}: LanguageSwitchProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const onLanguageChange = (lang: "en" | "uk") => {
    const currentPath = pathname;

    if (lang === "en" && currentLanguage !== "en") {
      // Add "en" to the beginning of the path
      const newPath = currentPath === "/" ? "/en" : `/en${currentPath}`;
      router.push(newPath);
    } else if (currentLanguage !== "uk") {
      // Remove "en" from the path
      const newPath = currentPath.replace(/^\/en/, "");
      router.push(newPath || "/");
    }
  };

  return (
    <div className="flex space-x-2">
      <Button
        size="small"
        color={currentLanguage === "en" ? "secondary" : "transparent"}
        onClick={() => onLanguageChange("en")}
      >
        Eng
      </Button>
      <Button
        size="small"
        color={currentLanguage === "uk" ? "secondary" : "transparent"}
        onClick={() => onLanguageChange("uk")}
      >
        Укр
      </Button>
    </div>
  );
};
