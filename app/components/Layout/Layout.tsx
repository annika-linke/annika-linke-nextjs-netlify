"use client";

import Color from "@/types/Color";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import "./layout.scss";

const Layout = ({
  children,
  background = Color.beige,
}: {
  children: ReactNode;
  background?: Color;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
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
