import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EMIP | Education Migration Intelligence Platform",
  description: "Tracking student migration patterns and deriving insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 150px)', paddingTop: '72px' }}>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
