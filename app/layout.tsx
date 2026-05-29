import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';

const glacialIndifference = localFont({
  src: [
    {
      path: './fonts/GlacialIndifference-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GlacialIndifference-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: "Play To Sky Productions | Movies Production Society | Coming Soon",
  description: "Play To Sky Productions is a premium movies production society dedicated to bringing compelling stories to life through innovative filmmaking and cinematic excellence.",
  keywords: [
    "Play To Sky",
    "Play To Sky Productions",
    "Movies Production",
    "Film Production Society",
    "Cinema",
    "Filmmaking",
    "Media Production"
  ],
  authors: [{ name: "Play To Sky Group" }],
  openGraph: {
    title: "Play To Sky Productions | Movies Production Society |Coming Soon",
    description: "Discover Play To Sky Productions, a dynamic movies production society dedicated to innovative filmmaking.",
    // url: "https://playtosky.com/",
    siteName: "Play To Sky Productions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Play To Sky Productions | Movies Production Society",
    description: "Premium movies production society bringing compelling stories to life.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      {/* Attention aux accolades et aux backticks sur cette ligne ! */}
      <body className={`${glacialIndifference.className} bg-black text-white h-dvh flex flex-col antialiased overflow-hidden`}>
        <Header />
        <main className="grow flex flex-col relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}