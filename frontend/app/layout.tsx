import type { Metadata } from "next";
import { Sidebar } from "./components/Sidebar/page";
import ThemeToggle from "./components/ThemeToggle/page";
import "./globals.css";

export const metadata: Metadata = {
  title: "LP Imóveis - Admin",
  description: "Painel Administrativo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full antialiased">
      <body className="h-full bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300 flex">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 relative">
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          {children}
        </main>
      </body>
    </html>
  );
}