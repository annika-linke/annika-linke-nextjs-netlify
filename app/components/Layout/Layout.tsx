"use client";

import Color from "@/types/Color";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import colors from "tailwindcss/colors";

const Layout = ({
  children,
  background = Color.beige,
}: {
  children: ReactNode;
  background?: Color;
}) => (
  <motion.div
    initial={{ x: 300, opacity: 0, backgroundColor: colors.amber[100] }}
    animate={{ x: 0, opacity: 1, backgroundColor: colors.blue[100] }}
    exit={{ x: 300, opacity: 0, backgroundColor: colors.indigo[100] }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;
