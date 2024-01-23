import { useRouter, usePathname } from "next/navigation";
import { Dropdown, DropdownItem } from "flowbite-react";

import { languages, languageNames } from "../app/i18n/settings";

export default async ({ lng }: { lng: string }) => {
  const path = usePathname();
  const router = useRouter();
  const setLang = (lang: string) => {
    router.push(`/${lang}/${path.split("/").slice(2)}`)
  };

  return (
    <Dropdown size="xs" label={languageNames[lng]}>
      <DropdownItem onClick={() => { setLang("en"); }}>English</DropdownItem>
      <DropdownItem onClick={() => { setLang("es"); }}>Español</DropdownItem>
    </Dropdown>
  );
};
