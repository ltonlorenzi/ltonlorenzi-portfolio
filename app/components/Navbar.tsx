"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import LanguageChanger from "./LanguageChanger";
import ThemeToggle from "./ThemeToggle";
import { localizedLink } from "../utils/linkHelper";

interface NavbarProps {
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const { t } = useTranslation(["common"]);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <Link href={localizedLink("/", locale)}>
        <h1>{t("welcome")}</h1>
      </Link>

      <Link href={localizedLink("/about", locale)}>{t("about")}</Link>

      <Link href={localizedLink("/projects", locale)}>{t("projects")}</Link>

      <Link href={localizedLink("/contact", locale)}>{t("contact")}</Link>

      <ThemeToggle />
      <LanguageChanger />
    </nav>
  );
}
