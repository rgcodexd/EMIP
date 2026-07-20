"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        
        {mounted && (
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{ background: 'transparent', border: 'none', color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px' }}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}

        <Link href="/login">
          <button className={styles.loginBtn}>Login</button>
        </Link>
      </div>
    </motion.nav>
  );
}
