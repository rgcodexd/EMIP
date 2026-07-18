"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 72px)' }}>
      <motion.div 
        className="glass-panel"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}
      >
        <h1 className="title-medium" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Welcome Back</h1>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Sign in to access your dashboard</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Email</label>
            <input type="email" placeholder="admin@gov.in" style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Password</label>
            <input type="password" placeholder="••••••••" style={{ padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
          </div>
          <button style={{ padding: '14px', borderRadius: '8px', background: 'var(--primary)', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}>
            Sign In
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
          Don't have an account? <Link href="#" style={{ color: 'var(--primary-light)' }}>Contact Admin</Link>
        </div>
      </motion.div>
    </div>
  );
}
