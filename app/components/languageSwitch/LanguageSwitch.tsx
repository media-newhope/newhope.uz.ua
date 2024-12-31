"use client";

import { Button } from "../button/Button";

interface LanguageSwitchProps {
  currentLanguage: "en" | "uk";
  onLanguageChange: (language: "en" | "uk") => void;
}

export const LanguageSwitch = ({
  currentLanguage = "uk",
  onLanguageChange,
}: LanguageSwitchProps) => {
  return (
    <div className="flex space-x-2">
      <Button
        size="small"
        color={currentLanguage === "en" ? "secondary" : "transparent"}
        onClick={() => onLanguageChange("en")}
      >
        EN
      </Button>
      <Button
        size="small"
        color={currentLanguage === "uk" ? "secondary" : "transparent"}
        onClick={() => onLanguageChange("uk")}
      >
        UK
      </Button>
    </div>
  );
};
