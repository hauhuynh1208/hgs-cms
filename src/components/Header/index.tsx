import React, { Dispatch, SetStateAction } from "react";
import { useCurrentPath } from "@/utils/hooks";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import cookie from "js-cookie";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/16/solid";

const langOptions = [
  { name: "English", value: "en" },
  { name: "Viet", value: "vi" },
];

interface HeaderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header(props: HeaderProps) {
  const { setIsOpen } = props;
  const { route } = useCurrentPath();
  return (
    <div className="flex p-2 items-center">
      <div className="flex gap-2">
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Bars3Icon className="size-6 text-white" />
        </button>
        <div>{route?.name}</div>
      </div>
      <div className="flex flex-1 justify-end">
        <LangDropdown />
      </div>
    </div>
  );
}

function LangDropdown() {
  const defaultLang = import.meta.env.VITE_DEFAULT_LANGUAGE;
  const cookieLang = cookie.get("lang") || defaultLang;
  const [lang, setLang] = React.useState(cookieLang);

  React.useEffect(() => {
    console.log(lang);
    cookie.set("lang", lang);
  }, [lang]);

  return (
    <Menu>
      <MenuButton className="w-24 inline-flex items-center justify-between gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        {langOptions.find((_) => _.value === lang)?.name || defaultLang}
        <ChevronDownIcon className="size-4 fill-white/60" />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-32 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {langOptions.map((_) => (
          <MenuItem key={_.value}>
            <button
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              onClick={() => setLang(_.value)}
            >
              {_.name}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
