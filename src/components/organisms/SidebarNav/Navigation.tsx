import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {items.map((i, index) => (
      <MenuItem item={i} key={`mi_${index}`} />
    ))}
  </motion.ul>
);

const items = [
   { label: 'Home', url: '/' },
   { label: 'About', url: '/about' },
   { label: 'Contact', url: '/contact' },
]