"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Overview", path: "/dashboard", icon: "📊" },
    { name: "Districts", path: "/dashboard/districts", icon: "🏙️" },
    { name: "Demographics", path: "/dashboard/demographics", icon: "👥" },
    { name: "Settings", path: "/dashboard/settings", icon: "⚙️" },
  ];

  return (
    <motion.aside 
      className={styles.sidebar}
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {links.map((link) => (
        <Link 
          key={link.name} 
          href={link.path}
          className={`${styles.link} ${pathname === link.path ? styles.active : ""}`}
        >
          <span>{link.icon}</span>
          {link.name}
        </Link>
      ))}
    </motion.aside>
  );
}
