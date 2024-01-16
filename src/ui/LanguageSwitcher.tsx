import Link from "next/link";
import { languages } from "../app/i18n/settings";
import { useTranslation } from "../app/i18n";

export default async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return (
    <div>
      <select
        className="dark:text-stone-200 dark:bg-slate-700"
        id="languageDropdown"
        name="Language Dropdown"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};
