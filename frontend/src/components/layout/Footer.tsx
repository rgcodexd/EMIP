"use client";

import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/student">Student Portal</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      <p>© {new Date().getFullYear()} EMIP. All rights reserved.</p>
    </footer>
  );
}
