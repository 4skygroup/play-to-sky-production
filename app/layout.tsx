import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const glacialIndifference = localFont({
  src: [
    {
      path: "./fonts/GlacialIndifference-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GlacialIndifference-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-glacial",
});

export const metadata: Metadata = {
  title: "Play To Sky Production | Coming Soon",
  description: "Agence media dediee aux podcasts, interviews et journalisme.",
  openGraph: {
    title: "Play To Sky Production | Coming Soon",
    description: "Agence media dediee aux podcasts, interviews et journalisme.",
    siteName: "Play To Sky Production",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={glacialIndifference.variable}>
      <body className={`${glacialIndifference.className} bg-black text-white h-dvh flex flex-col antialiased overflow-hidden`}>
        <Header />
        <main className="grow flex flex-col relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}