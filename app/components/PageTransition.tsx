import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: "linear" }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
