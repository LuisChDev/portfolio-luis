"use client";

import { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Dropdown, DropdownItem } from "flowbite-react";
import "flag-icons/css/flag-icons.min.css";
import "./LanguageSwitcher.css";

import { languages, languageNames } from "../app/i18n/settings";

const flags: { [key: string]: ReactNode } = {
  en: <span className="fi fi-gb" />,
  es: <span className="fi fi-es" />
};

export default ({ lng }: { lng: string }) => {
  const path = usePathname();
  const router = useRouter();
  const setLang = (lang: string) => {
    router.push(`/${lang}/${path.split("/").slice(2)}`);
  };

  return (
    <Dropdown size="xs" label={<div>{flags[lng]} {languageNames[lng]}</div>}>
      <DropdownItem onClick={() => { setLang("en"); }}> <span className="fi fi-gb" /> English</DropdownItem>
      <DropdownItem onClick={() => { setLang("es"); }}> <span className="fi fi-es" /> Español</DropdownItem>
    </Dropdown>
  );
};
