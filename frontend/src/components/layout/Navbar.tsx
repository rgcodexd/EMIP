"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Student Portal", path: "/student" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href="/" className={styles.logo}>
        <span className="gradient-text">EMIP</span>
      </Link>
      
      <div className={styles.navLinks}>
        {links.map((link) => (
          <Link 
            key={link.name} 
            href={link.path}
            className={`${styles.link} ${pathname === link.path ? styles.active : ""}`}
          >
            {link.name}
          </Link>
        ))}
        <Link href="/login">
          <button className={styles.loginBtn}>Login</button>
        </Link>
      </div>
    </motion.nav>
  );
}
