"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/leetcode",
    text: "Leetcode",
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <motion.ul
      className="flex flex-col p-4 md:p-0 mt-4 text-base font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {links.map((link) => (
        <motion.li
          key={link.href}
          className="mx-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={link.href}
            className={clsx(
              "block py-2 px-3 hover:text-text-primary hover:bg-btn-primary rounded-sm transition duration-300 ease-in-out",
              {
                "bg-btn-primary font-semibold": pathname === link.href,
              }
            )}
            aria-current="page"
          >
            {link.text}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavLinks;
