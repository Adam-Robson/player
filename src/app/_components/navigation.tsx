"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from "@/_data/navlinks";
import "@/_styles/navigation.css";

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
        items-end absolute top-0 left-0
      `}
    >
      {navLinks
        .filter((path) => path.path !== pathname)
        .map(({ name, path, icon: Icon }) => {
          const isActive = pathname === path;

          return (
            <div
              key={name}
              className="w-full mx-auto flex flex-col justify-between items-between"
            >
              <Link
                href={path}
                className={`
                  ${baseClasses} ${isActive ? "font-normal" : "font-light"}
                  group no-underline flex justify-between items-center
                `}
              >
                <span className="py-4 text-base md:text-lg">{name}</span>
                <Icon
                  size={32}
                  className={`
                    phosphor-icon
                    ml-2 opacity-0 group-hover:opacity-100
                    transition-colors duration-300
                  `}
                />
              </Link>
            </div>
          );
        })}
    </motion.nav>
  );
}
