import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio | Node Space",
  description: "Week 1 Capstone Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* SEMANTIC HTML: Navigation */}
        <header className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
          <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <span className="font-extrabold tracking-tighter text-xl">PORTFOLIO.</span>
            <div className="flex gap-8 text-sm font-medium text-neutral-400">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </nav>
        </header>

        {children}

        {/* SEMANTIC HTML: Footer */}
        <footer className="border-t border-white/10 py-12 mt-24 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Engineered by [Your Name].</p>
        </footer>
      </body>
    </html>
  );
}
