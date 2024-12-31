"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface MobileNavProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  menuItems: { name: string; link: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  menuItems,
  ...props
}) => {
  return isOpen ? (
    <nav
      className={twMerge(
        "fixed top-[64px] left-0 w-full bg-black transform transition-transform duration-300 ease-in-out",
      )}
      {...props}
    >
      <div className="flex flex-col items-center py-4 space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className="text-white hover:text-gray-300 uppercase"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  ) : undefined;
};

export default MobileNav;
