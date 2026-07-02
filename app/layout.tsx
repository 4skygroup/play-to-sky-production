import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import { policy } from "@/utils/constants/policy";
import { services } from "@/utils/constants/service";

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
      <body className={`${glacialIndifference.className} bg-black text-white min-h-dvh flex flex-col antialiased`}>
        <Header />
        <main className="grow flex flex-col relative">
          {children}
        </main>
        {/* <Footer policy={policy} services={services}/> */}
      </body>
    </html>
  );
}