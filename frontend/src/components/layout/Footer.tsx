"use client";

import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="/about">About</Link>
        <Link href="#">Documentation</Link>
        <Link href="#">Github</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Contact</Link>
      </div>
      <p>© {new Date().getFullYear()} EMIP. All rights reserved.</p>
    </footer>
  );
}
