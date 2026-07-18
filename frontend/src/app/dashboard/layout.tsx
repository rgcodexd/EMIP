"use client";

import styles from "./layout.module.css";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { logout } from "@/lib/firebase/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Loading Dashboard...</div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className={styles.dashboardContainer}>
      <aside className={`glass-panel ${styles.sidebar}`}>
        <div className={styles.sidebarHeader}>
          <h2 className="gradient-text">EMIP Admin</h2>
        </div>
        <nav className={styles.sidebarNav}>
          <Link href="/dashboard" className={styles.navLink}>Overview</Link>
          <Link href="/dashboard/migration" className={styles.navLink}>Migration Flows</Link>
          <Link href="/dashboard/economics" className={styles.navLink}>Economic Impact</Link>
          <Link href="/dashboard/settings" className={styles.navLink}>Settings</Link>
        </nav>
        <div className={styles.sidebarFooter}>
          <button onClick={handleLogout} className={styles.logoutButton}>Sign Out</button>
        </div>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
