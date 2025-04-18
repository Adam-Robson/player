"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from '@/_data/navlinks';

export default function Navigation() {
  const pathname = usePathname();

  const baseClasses = `
    flex justify-between items-center gap-2
    p-4 text-xl font-medium rounded-md 
  `;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        z-50 flex flex-col gap-2 p-4
        w-1/4 mx-auto max-w-md justify-start
        items-end absolute top-0
        left-0
      `}
    >
      {navLinks
        .filter(({ path }) => path !== "/" || pathname !== "/")
        .map(({ name, path, icon: Icon }) => {
          const isActive = pathname === path;

          const Text = <span className="py-4 text-base md:text-lg">{name}</span>;
          return (
            <div key={name} className="w-full mx-auto flex flex-col justify-between items-between">
              <Link
                href={path}
                className={`
                  ${baseClasses} ${isActive ? 'font-normal' : 'font-light'}
                  group no-underline flex justify-between items-center
                `}
              >
                {Text}
                <Icon
                  size={32}
                  className={`
                    ml-2 transition-color transition-opacity duration-500
                    text-blue-950 dark:text-blue-50
                    group-hover:text-red-200
                    opacity-0 group-hover:opacity-100
                  `}
                />
              </Link>
            </div>
        );
      })}
    </motion.nav>
  );
}
