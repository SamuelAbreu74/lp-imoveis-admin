import type { Metadata } from "next";
import { Sidebar } from "./components/Sidebar/page";
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
    <html lang="pt-br" className="h-full antialiased dark:bg-zinc-950">
      <body className="h-full bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 flex">
        <Sidebar />
        
        <main className="flex-1 flex flex-col h-screen overflow-y-auto p-8">
          {children}
        </main>
      </body>
    </html>
  );
}