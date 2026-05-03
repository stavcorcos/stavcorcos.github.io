import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Stav Corcos — Full Stack Web Developer",
  description:
    "Full Stack Web Developer with 5+ years of experience building fast, accessible web applications with React, Next.js, Node.js, and cloud infrastructure.",
  openGraph: {
    title: "Stav Corcos — Full Stack Web Developer",
    description:
      "Full Stack Web Developer with 5+ years of experience building fast, accessible web applications with React, Next.js, Node.js, and cloud infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-text font-mono text-[15px] leading-[1.7] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
