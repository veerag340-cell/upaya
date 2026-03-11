"use client";

import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const MobileHeaderLink: React.FC<{
  item: HeaderItem;
  closeMenu: () => void;
}> = ({ item, closeMenu }) => {

  const path = usePathname();

  return (

    <Link
      href={item.href}
      onClick={closeMenu}
      className={`block py-2 px-3 rounded-lg text-base ${path === item.href
          ? "bg-primary text-white"
          : "text-black hover:bg-gray-100"
        }`}
    >
      {item.label}
    </Link>

  );

};

export default MobileHeaderLink;